import {useState, useRef, useContext} from 'react';
import {Content, ContentUser, Image, ButtonFile} from './Styles';
import {Container, Title} from '../../Styles/GlobalStyles';
import {ButtonIcon, Button} from '../../components/Buttons/Buttons';
import { BiDotsVerticalRounded} from "react-icons/bi";
import {Form, FormInputs} from '../../components/Form/Styles';
import {useForm} from '../../hooks/useForm';
import {fetchPut, fetchPost, fetchGet} from '../../hooks/useFetch';
import Modal from '../../components/Modal/Modal';
import Input from '../../components/Form/Input';
import DefaultImage from '../../images/default_user.jpg';
import SessionContext from '../../context/SessionContext';
import toast from 'react-hot-toast';
import Options from '../../components/Options/Options';
import Cookies from 'js-cookie';

const Profile = function() {

    // Variables and States
    const {session, setSession} = useContext(SessionContext);
    const [isActiveModal, setIsActiveModal] = useState(false);
    const [isActiveOptions, setIsActiveOptions] = useState(false);
    
    const user = JSON.parse(session);
    const refInputFile = useRef();

    // Functions to hanldes elements states
    const handleModalForm = () => setIsActiveModal(true);
    const handleModalPassword = () => console.log('Handle modal password');

    const successFunction = (e) => {

        const formData = new FormData(e.target);

        const request = fetchPost('http://localhost:80/api-school-works/users/update.php?id=2', formData);
        request.then(response => console.log(response));
        
    }

    const errorFunction = (e) => toast.error("Error, please fill in the formular correctally");

    // Settings interfaz
    const initialForm = {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        status: user.status,
        image: user.image,
        password: user.password
    }

    const expressions = {
        name:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,45}$/
    }

    const options = [
        {option: 'Change information', function: handleModalForm},
        {option: 'Change password', function: handleModalPassword},
    ]

    const {handleChange, handleSubmit, form, invalidInputs} = useForm(initialForm, successFunction, errorFunction);

    return (
        <Container>
            <Modal title="Edit information" isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}>
                <Form max='true' onSubmit={handleSubmit} enctype="multipart/form-data">
                    <FormInputs>
                        <Input type="text" name="name" placeholder="Name" expression={expressions.name} value={form.name} handleChange={handleChange} valid={invalidInputs.name}/>
                        <Input type="text" name="lastname" placeholder="Lastname" expression={expressions.name} value={form.lastname} handleChange={handleChange} valid={invalidInputs.lastname} />
                        <Input type="file" name="image" reference={refInputFile} handleChange={handleChange}/>
                        <ButtonFile type="button" onClick={() => refInputFile.current.click()}>Select image</ButtonFile>
                    </FormInputs>
                    <div>
                        <Button>Update</Button>
                    </div>
                </Form>
            </Modal>
            <Title>Profile</Title> 
            <Content>
                <ContentUser>
                    <ButtonIcon className="btnEdit" handleClick={() => setIsActiveOptions(!isActiveOptions)}>
                        <BiDotsVerticalRounded/>
                        <Options options={options} isActiveOptions={isActiveOptions}/>
                    </ButtonIcon>
                    <Image src={DefaultImage} alt="Photo"/>
                    <h2>{user.name} {user.lastname}</h2>
                    <p>{user.email}</p>
                    <span>{user.role}</span>
                </ContentUser>
            </Content>
        </Container>
    );
}

export default Profile;