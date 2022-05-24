import {Form, FormInputs, Actions} from '../../components/Form/Styles';
import {Button} from '../../components/Buttons/Buttons';
import {Container, Content, Links} from './Styles';
import {Link, useNavigate} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import {fetchGet} from '../../hooks/useFetch';
import {useContext} from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Form/Input';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import SessionContext from '../../context/SessionContext';
import CryptoJS from 'crypto-js'

const Login = function () {
    
    const {setSession} = useContext(SessionContext);

    const initialForm = {
        email: '',
        password: ''
    }

    const expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,45}$/
    }

    const navigate = useNavigate();

    const decrypt_password = (string) => {

        let bytes = CryptoJS.AES.decrypt(string.toString(), '@school-works-password');
        let password_decrypt = bytes.toString(CryptoJS.enc.Utf8);

        return password_decrypt;
    }

    const successFunction = (e) => {

        const request = fetchGet('http://localhost:5000/users');
        request.then(response => {

           let registers = response.filter(el => el.email === form.email);
           
           if(registers.length > 0) {

                let user = registers[0];
                let password_decrypt = decrypt_password(user.password).replace('"', '').replace('"', '');

                if(form.password === password_decrypt) {
                    toast.success(`Welcome, ${user.name}`);

                    setTimeout(() => {

                        Cookies.set('user', JSON.stringify(user), { expires: 365 });
                        setSession(Cookies.get('user'));
                        
                        navigate('/panel/dashboard');
                        handleReset(e);

                    }, 2000);

                }else {
                    toast.error('Incorrect credentials');
                }

           }else {
                toast.error('Incorrect credentials');
           }
        });
    }

    const errorFunction = () => {toast.error("Error, please fill in the formular correctally");}

    const {form, handleChange, handleSubmit, handleReset, invalidInputs} = useForm(initialForm, successFunction, errorFunction);

    return(
        <Container>
            <Header/>
           <Content>
                <Form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <FormInputs>
                        <Input type="email" name="email" placeholder="Email address" handleChange={handleChange} valid={invalidInputs.email} value={form.email} expression={expressions.email} />
                        <Input type="password" name="password" placeholder="Password" handleChange={handleChange} valid={invalidInputs.password} value={form.password} expression={expressions.password}  />
                    </FormInputs>
                    <Actions column>
                        <Button>Login</Button>
                    </Actions>
                    <Links>
                        <Link to="/">Go back</Link>
                        <Link to="/signup">Don't you have an account yet?</Link>
                    </Links>
                </Form>
           </Content>
        </Container>
    );
}

export default Login;