import {Form, FormInputs, Actions} from '../../components/Form/Styles';
import {Button} from '../../components/Buttons/Buttons';
import {Container, Content, Links} from './Styles';
import {useForm} from '../../hooks/useForm';
import {Link} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Input from '../../components/Form/Input';

const Signup = function () {

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

    const successFunction = (e) => {
        alert("All it's ok");
        handleReset(e);
    };
    
    const errorFunction = (e) => {alert("Ops, it ocurred an error")};

    const {handleChange, handleSubmit, form, handleReset} = useForm(initialForm, successFunction, errorFunction);

    return(
        <Container>
            <Header/>
           <Content>
                <Form onSubmit={handleSubmit}>
                    <h2>Signup</h2>
                    <FormInputs grid>
                        <Input type="text" name="name" placeholder="Name" expression={expressions.name} value={form.name.value} handleChange={handleChange} valid={form.name.valid}/>
                        <Input type="text" name="lastname" placeholder="Lastname" expression={expressions.name} value={form.lastname.value} handleChange={handleChange} valid={form.lastname.valid} />
                        <Input type="email" name="email" placeholder="Email address" expression={expressions.email} value={form.email.value} handleChange={handleChange} valid={form.email.valid} />
                        <Input type="password" name="password" placeholder="Password" expression={expressions.password} value={form.password.value} handleChange={handleChange} valid={form.password.valid} />
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