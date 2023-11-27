
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import backbloodImg from "../asset/best/back4blood.jpg";
import crysisImg from "../asset/best/crysis3.jpg";
import residentImg from "../asset/best/residentEvil2.jpg";
import twdImg from "../asset/best/theWalkingDead.jpg";
import thiefImg from "../asset/best/thief.jpg";
import untilImg from "../asset/best/untilDawn.jpg";

const BestGame = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="best"><b>!!BEST GAMES!!</b></h1>
                <br />
                <Row>
                    <Col md={4}>
                        <Card className='gameImg'>
                            <Image src={backbloodImg} alt="back 4 blood Images" className="imgs" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Back4Blood</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={crysisImg} alt="Crysis Games" className="imgs" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Crysis 3</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={residentImg} alt="Residen Evil 2 Images" className="imgs" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Resident Evil 2</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={twdImg} alt="The Walking Dead Images" className="imgs" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">The Walking Dead</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={thiefImg} alt="Thief Images" className="imgs" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Thief</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={untilImg} alt="Until Dawn Images" className="imgs" />
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Until Dawn</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BestGame;