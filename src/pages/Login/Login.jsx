import {Form, FormInputs, Actions} from '../../components/Form/Styles';
import {Button} from '../../components/Buttons/Buttons';
import {Container, Content, Links} from './Styles';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Input from '../../components/Form/Input';
import {useForm} from '../../hooks/useForm';

const Login = function () {

    const initialForm = {
        email: {value: '', valid: null},
        password: {value: '', valid: null}
    }

    const expressions = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{8,45}$/
    }

    const successFunction = (e) => {
        console.log("All it's ok");
        handleReset(e);
    }

    const errorFunction = () => {alert("Error, please fill in the formular correctally");}

    const {form, handleChange, handleSubmit, handleReset} = useForm(initialForm, successFunction, errorFunction);

    return(
        <Container>
            <Header/>
           <Content>
                <Form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <FormInputs>
                        <Input type="email" name="email" placeholder="Email address" handleChange={handleChange} valid={form.email.valid} value={form.email.value} expression={expressions.email} />
                        <Input type="password" name="password" placeholder="Password" handleChange={handleChange} valid={form.password.valid} value={form.password.value} expression={expressions.password}  />
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