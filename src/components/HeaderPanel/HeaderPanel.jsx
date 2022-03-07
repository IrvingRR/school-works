import {Container, Group, Image, Options, Option} from './Styles';
import {ButtonIcon} from '../Buttons/Buttons';
import { BiChevronDown, BiExpandAlt } from "react-icons/bi";
import {useState} from 'react';
import Paradise from '../../images/background-home.jpg';

const HeaderPanel = function ({handleActiveSidebar}) {

    const [isActiveOptions, setIsActiveOptions] = useState(false);

    const handleActiveOptions = () => setIsActiveOptions(!isActiveOptions);

    return(
        <Container>
            <ButtonIcon handleClick={handleActiveSidebar}>
                <BiExpandAlt/>
            </ButtonIcon>
            <Group onClick={ handleActiveOptions }>
                <p>Hey, <span>Andrea</span></p>
                <Image src={Paradise} alt="Paradise"/>
                <BiChevronDown/>

                <Options isActiveOptions={isActiveOptions.toString()}>
                    <Option onClick={ handleActiveOptions }>
                        <span>Change mode</span>
                    </Option>
                    <Option onClick={ handleActiveOptions }>
                        <span>Exit</span>
                    </Option>
                </Options>
            </Group>
        </Container>
    );
}

export default HeaderPanel;