import {Container, Card, CardHeader, CardBody} from './Styles';
import { BiX } from "react-icons/bi";
import  {ButtonIcon } from '../Buttons/Buttons';

const Modal = function({title, children, type, isActiveModal, setIsActiveModal}) {

    const handleHiddeModal = () => setIsActiveModal(false);

    return(
        <Container isActiveModal={isActiveModal.toString()}>
            <Card type={type}>
                <CardHeader>
                    <h3>{title}</h3>
                    <ButtonIcon handleClick={handleHiddeModal}>
                        <BiX/>
                    </ButtonIcon>
                </CardHeader>
                <CardBody type={type}>
                    {children}
                </CardBody>
            </Card>
        </Container>
    );
}

export default Modal;