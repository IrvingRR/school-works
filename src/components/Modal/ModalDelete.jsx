import {Container,
    Card,CardHeader, CardBody, CardActions} from './Styles';
import { BiX } from "react-icons/bi";
import  {ButtonIcon, Button } from '../Buttons/Buttons';

const ModalDelete = function({title, to}) {
return(
    <Container>
        <Card>
            <CardHeader>
                <h3>Delete {to}</h3>
                <ButtonIcon>
                    <BiX/>
                </ButtonIcon>
            </CardHeader>
            <CardBody>
                Are you sure you want to delete this {to}? 
            </CardBody>
            <CardActions center>
                <Button>Delete</Button>
                <Button secundary>Cancel</Button>
            </CardActions>
        </Card>
    </Container>
);
}

export default ModalDelete;