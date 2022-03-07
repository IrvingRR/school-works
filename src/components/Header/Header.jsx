import {Container, Logo, Group} from './Styles';
import { BiBookOpen, BiMoon } from "react-icons/bi";
import {ButtonIcon} from '../Buttons/Buttons';

const Header = function () {
    return(
        <Container>
            <Logo to="/">
                <BiBookOpen/>
                <h2>SchoolWorks</h2>
            </Logo>
            <Group>
                <h3>Change mode</h3>
                <ButtonIcon>
                    <BiMoon/>
                </ButtonIcon>
            </Group>
        </Container>
    );
}

export default Header;