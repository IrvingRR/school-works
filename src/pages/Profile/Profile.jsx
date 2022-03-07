import {useState, useRef} from 'react';
import {Content, ContentUser, Image} from './Styles';
import {Container, Title} from '../../Styles/GlobalStyles';
import {ButtonIcon, Button} from '../../components/Buttons/Buttons';
import { BiPencil } from "react-icons/bi";
import {Form, FormInputs, Actions} from '../../components/Form/Styles';
import {useForm} from '../../hooks/useForm';
import Modal from '../../components/Modal/Modal';
import Photo from '../../images/background-home.jpg';
import Input from '../../components/Form/Input';

const Profile = function() {

    const [isActiveModal, setIsActiveModal] = useState(false);
    const refInputFile = useRef();

    const initialForm = {
        name: {value: '', valid: null},
        lastname: {value: '', valid: null},
        email: {value: '', valid: null},
        password: {value: '', valid: null}
    }

    const expressions = {
        name:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,45}$/
    }

    const handleShowModal = () => setIsActiveModal(true);

    const handleActiveInputFile =  (e) => {
        e.preventDefault();
        refInputFile.current.click();
    }

    const handlePassword = (e) => alert("Change password");

    const successFunction = (e) => {
        alert("Information modificated");
        handleReset(e);
    }

    const errorFunction = (e) => alert("Ops, it ocurred an error");

    const {handleChange, handleSubmit, form, handleReset} = useForm(initialForm, successFunction, errorFunction);

    return (
        <Container>
            <Modal title="Edit information" isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}>
                <Form max='true' onSubmit={handleSubmit}>
                    <FormInputs grid>
                    <Input type="text" name="name" placeholder="Name" expression={expressions.name} value={form.name.value} handleChange={handleChange} valid={form.name.valid}/>
                        <Input type="text" name="lastname" placeholder="Lastname" expression={expressions.name} value={form.lastname.value} handleChange={handleChange} valid={form.lastname.valid} />
                        <Input type="email" name="email" placeholder="Email address" expression={expressions.email} value={form.email.value} handleChange={handleChange} valid={form.email.valid} disabled />
                        <Input type="password" name="password" placeholder="Password" expression={expressions.password} value={form.password.value} handleChange={handleChange} valid={form.password.valid} disabled />
                        <Input type="file" name="image"  reference={refInputFile}/>
                    </FormInputs>
                    <Actions>
                        <Button secundary handleClick={handleActiveInputFile}>Change photo</Button>
                        <Button secundary type="button" handleClick={handlePassword}>Change password</Button>
                    </Actions>
                    <div>
                        <Button>Update</Button>
                    </div>
                </Form>
            </Modal>
            <Title>Profile</Title> 
            <Content>
                <ContentUser>
                    <ButtonIcon className="btnEdit" handleClick={handleShowModal}>
                        <BiPencil/>
                    </ButtonIcon>
                    <Image src={Photo} alt="Photo"/>
                    <h2>Andrea Villegas</h2>
                    <p>andrea_villegas@gmail.com</p>
                    <span>Student</span>
                </ContentUser>
            </Content>
        </Container>
    );
}

export default Profile;