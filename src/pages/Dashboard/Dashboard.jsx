import {Container, Title, Subtitle, Content,
        TableContainer, Table, TableHeader, TableContent, TdImage, Status} from '../../Styles/GlobalStyles';
import { BiNotepad, BiGroup, BiBookAlt, BiCategory } from "react-icons/bi";
import {ButtonLink} from '../../components/Buttons/Buttons';
import {Amounts, Amount, AmountHeader, AmountBody,
        Grid, Lesson, LessonHeader, LessonInfo, LessonBody, Header,
        Category, CategoryHeader, CategoryBody} from './Styles';
import Image from '../../images/background-home.jpg';

const Dashboard = function () {
    return (
        <Container flexRow>
            <Title>
                Dashboard
            </Title>
            <Amounts>
                <Amount>
                    <AmountHeader>
                        <BiNotepad/>
                    </AmountHeader>
                    <AmountBody>
                        <h3>Total Works</h3>
                        <h2>20</h2>
                    </AmountBody>
                </Amount>

                <Amount>
                    <AmountHeader>
                        <BiGroup/>
                    </AmountHeader>
                    <AmountBody>
                        <h3>Total Teachers</h3>
                        <h2>7</h2>
                    </AmountBody>
                </Amount>

                <Amount>
                    <AmountHeader>
                        <BiBookAlt/>
                    </AmountHeader>
                    <AmountBody>
                        <h3>Total Lessons</h3>
                        <h2>7</h2>
                    </AmountBody>
                </Amount>
                
                <Amount>
                    <AmountHeader>
                        <BiCategory/>
                    </AmountHeader>
                    <AmountBody>
                        <h3>Total Categories</h3>
                        <h2>7</h2>
                    </AmountBody>
                </Amount>
            </Amounts>
            
            <Content>
                {/* Works */}
                <Subtitle>Works</Subtitle>
                <TableContainer>
                    <TableHeader>
                        <ButtonLink to="/panel/works">Show all</ButtonLink>
                    </TableHeader>
                    <TableContent>
                        <Table>
                            <thead>
                               <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Lesson</th>
                                <th>Important grade</th>
                                <th>Status</th>
                                <th>Date of delivery</th>
                               </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Homework of Math</td>
                                    <td>Resolve the 20 problems of the page 10</td>
                                    <td>Math</td>
                                    <td>
                                        <Status status="Low">Low</Status>
                                    </td>
                                    <td>
                                        <Status status="Finished">Finished</Status>
                                    </td>
                                    <td className="dateDelivery">20/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Homework of Math</td>
                                    <td>Resolve the 20 problems of the page 10</td>
                                    <td>Programming</td>
                                    <td>
                                        <Status status="High">High</Status>
                                    </td>
                                    <td>
                                        <Status status="Incomplete">Incomplete</Status>
                                    </td>
                                    <td className="dateDelivery">20/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Homework of Math</td>
                                    <td>Resolve the 20 problems of the page 10</td>
                                    <td>History</td>
                                    <td>
                                        <Status status="Medium">Medium</Status>
                                    </td>
                                    <td>
                                        <Status status="Pending">Pending</Status>
                                    </td>
                                    <td className="dateDelivery">20/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Homework of Math</td>
                                    <td>Resolve the 20 problems of the page 10</td>
                                    <td>Math</td>
                                    <td>
                                        <Status status="Low">Low</Status>
                                    </td>
                                    <td>
                                        <Status status="Finished">Finished</Status>
                                    </td>
                                    <td className="dateDelivery">20/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Homework of Math</td>
                                    <td>Resolve the 20 problems of the page 10</td>
                                    <td>Programming</td>
                                    <td>
                                        <Status status="High">High</Status>
                                    </td>
                                    <td>
                                        <Status status="Incomplete">Incomplete</Status>
                                    </td>
                                    <td className="dateDelivery">20/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Homework of Math</td>
                                    <td>Resolve the 20 problems of the page 10</td>
                                    <td>History</td>
                                    <td>
                                        <Status status="Medium">Medium</Status>
                                    </td>
                                    <td>
                                        <Status status="Pending">Pending</Status>
                                    </td>
                                    <td className="dateDelivery">20/02/2022</td>
                                </tr>
                                <tr>
                                    <td>Homework of Math</td>
                                    <td>Resolve the 20 problems of the page 10</td>
                                    <td>Math</td>
                                    <td>
                                        <Status status="Low">Low</Status>
                                    </td>
                                    <td>
                                        <Status status="Finished">Finished</Status>
                                    </td>
                                    <td className="dateDelivery">20/02/2022</td>
                                </tr>
                            </tbody>
                        </Table>
                    </TableContent>
                </TableContainer>

                {/* Teachers */}
                <Subtitle>Teachers</Subtitle>
                <TableContainer>
                    <TableHeader>
                        <ButtonLink to="/panel/teachers">Show all</ButtonLink>
                    </TableHeader>
                    <TableContent>
                        <Table>
                            <thead>
                               <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Phone</th>
                                <th>Email addresse</th>
                                <th>Lesson</th>
                               </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <TdImage src={Image} alt="Image" />
                                    </td>
                                    <td>Raúl</td>
                                    <td>Herrera</td>
                                    <td>6181898699</td>
                                    <td>raul@utd.com</td>
                                    <td>Programming</td>
                                </tr>
                                <tr>
                                    <td>
                                        <TdImage src={Image} alt="Image" />
                                    </td>
                                    <td>Raúl</td>
                                    <td>Herrera</td>
                                    <td>6181898699</td>
                                    <td>raul@utd.com</td>
                                    <td>Programming</td>
                                </tr>
                                <tr>
                                    <td>
                                        <TdImage src={Image} alt="Image" />
                                    </td>
                                    <td>Raúl</td>
                                    <td>Herrera</td>
                                    <td>6181898699</td>
                                    <td>raul@utd.com</td>
                                    <td>Programming</td>
                                </tr>
                            </tbody>
                        </Table>
                    </TableContent>
                </TableContainer>

                {/* Lessons */}
                <Subtitle>Lessons</Subtitle>
                <Header>
                    <ButtonLink to="/panel/lessons">Show all</ButtonLink>
                </Header>
                <Grid>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                    <Lesson>
                        <LessonHeader>
                            <img src={Image} alt="Image2"/>
                            <LessonInfo>
                                <h3>Programming Web Applications</h3>
                            </LessonInfo>
                        </LessonHeader>
                        <LessonBody>
                            <h3>Raúl Herrera</h3>
                            <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico</p>
                        </LessonBody>
                    </Lesson>
                </Grid>

                {/* Categories */}
                <Subtitle>Categories</Subtitle>
                <Header>
                    <ButtonLink to="/panel/categories">Show all</ButtonLink>
                </Header>
                <Grid>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                    <Category>
                        <CategoryHeader>
                            <h3>Projects</h3>
                        </CategoryHeader>
                        <CategoryBody>
                            <p>No description</p>
                            {/* <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el</p> */}
                        </CategoryBody> 
                    </Category>
                </Grid>
            </Content>
        </Container>
    );
}

export default Dashboard;