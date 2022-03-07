import Header from '../../components/Header/Header';
import {Container, Content, Group} from './Styles';
import {ButtonLink} from '../../components/Buttons/Buttons';

const Home = function() {

    return(
        <Container>
            <Header/>
            <Content>
                <h1>All your school works in order</h1>
                <p>Manage all you works, lessons and teachers of the best way</p>
                <Group>
                    <ButtonLink to="/login">Login</ButtonLink>
                    <ButtonLink secundary="true" to="/signup">Sign up</ButtonLink>
                </Group>
            </Content>
        </Container>
    );
    
}

export default Home;