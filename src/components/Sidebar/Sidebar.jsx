import {Container, Header, Logo, Elements, Element, ElementLink} from './Styles';
import { BiBookOpen, BiHomeAlt, BiUser, BiGroup, BiBookAlt, BiCategory, BiNotepad, BiX } from "react-icons/bi";
import {ButtonIcon} from '../Buttons/Buttons';

const Sidebar = function ({isActiveSidebar, handleActiveSidebar}) {

    return(
        <Container isactivesidebar={isActiveSidebar.toString()}>
            <Header isactivesidebar={isActiveSidebar.toString()}>
                <Logo to="dashboard" isactivesidebar={isActiveSidebar.toString()}>
                    <BiBookOpen/>
                    <h2>School<span>Works</span></h2>
                </Logo>
            </Header>
            <Elements>
                <Element>
                    <ElementLink  to="dashboard" >
                        <BiHomeAlt/>
                        <span>Dashboard</span>
                    </ElementLink>
                </Element>
                <Element>
                    <ElementLink  to="profile">
                        <BiUser/>
                        <span>Profile</span>
                    </ElementLink>
                </Element>
                <Element>
                    <ElementLink  to="works">
                        <BiNotepad/>
                        <span>Works</span>
                    </ElementLink>
                </Element>
                <Element>
                    <ElementLink  to="teachers">
                        <BiGroup/>
                        <span>Teachers</span>
                    </ElementLink>
                </Element>
                <Element>
                    <ElementLink  to="lessons">
                        <BiBookAlt/>
                        <span>Lessons</span>
                    </ElementLink>
                </Element>
                <Element>
                    <ElementLink  to="categories">
                        <BiCategory/>
                        <span>Categories</span>
                    </ElementLink>
                </Element>
            </Elements>
            <ButtonIcon className="buttonClosed" handleClick={handleActiveSidebar}>
                <BiX/>
            </ButtonIcon>
        </Container>
    );
}

export default Sidebar;