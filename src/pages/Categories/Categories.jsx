import {Container, Title, Header} from '../../Styles/GlobalStyles';
import {BiTrash, BiPlus } from "react-icons/bi";
import {CategoriesContent, Category, CategoryHeader, CategoryBody} from './Styles';
import {ButtonIcon, Button} from '../../components/Buttons/Buttons';

const Categories = function() {
    return(
        <Container>
            <Title>
                Categories
            </Title>
            <Header>
                <Button>
                    <BiPlus/>
                    Add new
                </Button>
            </Header>
            <CategoriesContent>
                <Category>
                    <CategoryHeader>
                        <h3>Projects</h3>
                        <ButtonIcon>
                            <BiTrash/>
                        </ButtonIcon>
                    </CategoryHeader>
                    <CategoryBody>
                        <p>No description</p>
                        {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                    </CategoryBody>
                </Category>

                <Category>
                    <CategoryHeader>
                        <h3>Projects</h3>
                        <ButtonIcon>
                            <BiTrash/>
                        </ButtonIcon>
                    </CategoryHeader>
                    <CategoryBody>
                        <p>No description</p>
                        {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                    </CategoryBody>
                </Category>

                <Category>
                    <CategoryHeader>
                        <h3>Projects</h3>
                        <ButtonIcon>
                            <BiTrash/>
                        </ButtonIcon>
                    </CategoryHeader>
                    <CategoryBody>
                        <p>No description</p>
                        {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                    </CategoryBody>
                </Category>

                <Category>
                    <CategoryHeader>
                        <h3>Projects</h3>
                        <ButtonIcon>
                            <BiTrash/>
                        </ButtonIcon>
                    </CategoryHeader>
                    <CategoryBody>
                        <p>No description</p>
                        {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                    </CategoryBody>
                </Category>

                <Category>
                    <CategoryHeader>
                        <h3>Projects</h3>
                        <ButtonIcon>
                            <BiTrash/>
                        </ButtonIcon>
                    </CategoryHeader>
                    <CategoryBody>
                        <p>No description</p>
                        {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                    </CategoryBody>
                </Category>

                <Category>
                    <CategoryHeader>
                        <h3>Projects</h3>
                        <ButtonIcon>
                            <BiTrash/>
                        </ButtonIcon>
                    </CategoryHeader>
                    <CategoryBody>
                        <p>No description</p>
                        {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                    </CategoryBody>
                </Category>

                <Category>
                    <CategoryHeader>
                        <h3>Projects</h3>
                        <ButtonIcon>
                            <BiTrash/>
                        </ButtonIcon>
                    </CategoryHeader>
                    <CategoryBody>
                        <p>No description</p>
                        {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                    </CategoryBody>
                </Category>
               
            </CategoriesContent>
        </Container>
    );
}

export default Categories;