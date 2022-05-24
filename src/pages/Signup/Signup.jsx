import {Form, FormInputs, Actions} from '../../components/Form/Styles';
import {Button} from '../../components/Buttons/Buttons';
import {Container, Content, Links} from './Styles';
import {useForm} from '../../hooks/useForm';
import {Link, useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {fetchPost, fetchGet} from '../../hooks/useFetch';
import SessionContext from '../../context/SessionContext';
import Header from '../../components/Header/Header';
import Input from '../../components/Form/Input';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js'

const Signup = function () {

    const {setSession} = useContext(SessionContext);
    const navigate = useNavigate();
    
    const initialForm = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        role: 'Student',
        status: 'Active',
        image: 'default_user.jpg',
    }

    const expressions = {
        name:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,45}$/
    }

    const createAccount = (data) => {

        const password_encrypt = CryptoJS.AES.encrypt(JSON.stringify(data.password), '@school-works-password').toString();
        data.password = password_encrypt;
        
        fetchPost('http://localhost:5000/users', data).then(response => {

            if(response) {
                toast.success('Account created successfully!');
                
                setTimeout(() => {
                    Cookies.set('user', JSON.stringify(response), { expires: 365 });
                    setSession(Cookies.get('user'));
                    navigate('/panel/dashboard');
                }, 1000);
            }
        });
    }

    const successFunction = async (e) => {

        const request = fetchGet('http://localhost:5000/users');

        request.then(response => {
            let isUsedEmail = response.filter(el => el.email === form.email);
            
            if(isUsedEmail.length === 0) {
                createAccount(form);
                handleReset(e);
            }else {
                toast.error('Email is registered already');
            }
        });

    }
    
    const errorFunction = (e) => {toast.error("Please fill in the formulary correctlaly")};

    const {handleChange, handleSubmit, form, handleReset, invalidInputs} = useForm(initialForm, successFunction, errorFunction);

    return(
        <Container>
            <Header/>
           <Content>
                <Form onSubmit={handleSubmit}>
                    <h2>Sign up</h2>
                    <FormInputs grid>
                        <Input type="text" name="name" placeholder="Name" expression={expressions.name} value={form.name} handleChange={handleChange} valid={invalidInputs.name}/>
                        <Input type="text" name="lastname" placeholder="Lastname" expression={expressions.name} value={form.lastname} handleChange={handleChange} valid={invalidInputs.lastname} />
                        <Input type="email" name="email" placeholder="Email address" expression={expressions.email} value={form.email} handleChange={handleChange} valid={invalidInputs.email} />
                        <Input type="password" name="password" placeholder="Password" expression={expressions.password} value={form.password} handleChange={handleChange} valid={invalidInputs.password} />
                    </FormInputs>
                    <Actions>
                        <Button>Sign up</Button>
                    </Actions>
                    <Links>
                        <Link to="/">Go back</Link>
                        <Link to="/login">Already you have an account?</Link>
                    </Links>
                </Form>
           </Content>
        </Container>
    );
}

export default Signup;