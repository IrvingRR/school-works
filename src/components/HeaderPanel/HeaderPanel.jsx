import {Container, Group, Image} from './Styles';
import {ButtonIcon} from '../Buttons/Buttons';
import { BiExpandAlt } from "react-icons/bi";
import {useState, useContext} from 'react';
import {fetchGet} from '../../hooks/useFetch';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import SessionContext from '../../context/SessionContext';
import DefaultImage from '../../images/default_user.jpg';
import Options from '../Options/Options';

const HeaderPanel = function ({handleActiveSidebar}) {

    const {session} = useContext(SessionContext);
    const [isActiveOptions, setIsActiveOptions] = useState(false);
    
    const user = JSON.parse(session);

    const handleActiveOptions = () => setIsActiveOptions(!isActiveOptions);

    const handleCloseSession = () => {

        fetchGet('http://localhost:80/api-school-works/logout.php');
        Cookies.remove('user');
        toast('Good bye!', {icon: '👋'});

        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }

    return(
        <Container>
            <ButtonIcon handleClick={handleActiveSidebar}>
                <BiExpandAlt/>
            </ButtonIcon>
            <Group onClick={ handleActiveOptions }>
                <p>Hey, <span>{user.name}</span></p>
                <Image src={DefaultImage} alt={user.name}/>
                <Options isActiveOptions={isActiveOptions} options={[{option: 'Exit', function: handleCloseSession}]}  />
            </Group>
        </Container>
    );
}

export default HeaderPanel;