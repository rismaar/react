
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import mineCraftImg from "../asset/trending/minecraft.jpg";
import farCryImg from "../asset/trending/farCry6.jpg";
import lolImg from "../asset/trending/lol.jpg";
import olliworldImg from "../asset/trending/olliworld.jpg";
import valorantImg from "../asset/trending/valorant.jpg";
import wowImg from "../asset/trending/wow.jpg";

const TrendGame = () => {
    return(
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center" id="trending"><b>!!TRENDING GAMES!!</b></h1>
                <br />
                <Row>
                    <Col md={4}>
                        <Card className='gameImg'>
                            <Image src={mineCraftImg} alt="Minecraft Images" className="imgs" />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-dark">
                                    <Card.Title className="text-center fw-bold">Minecraft</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={farCryImg} alt="FarCry Games" className="imgs" />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-black">
                                    <Card.Title className="text-center fw-bold">FarCry6</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={lolImg} alt="LOL Images" className="imgs" />
                            <div className="bg-white">
                                <div className="p-2 m-1 text-black">
                                    <Card.Title className="text-center fw-bold">Legue of Legends</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={olliworldImg} alt="OlliWorld Images" className="imgs" />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-black">
                                    <Card.Title className="text-center fw-bold">Olli Olli World</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={valorantImg} alt="Valorant Images" className="imgs" />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-black">
                                    <Card.Title className="text-center fw-bold">Valorant</Card.Title>
                                    <Card.Text>This is a wider card with natural lead-in to additional content</Card.Text>
                                    <Card.Text>Last update 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="gameImg">
                            <Image src={wowImg} alt="Minecraft Images" className="imgs" />
                            <div className="bg-light">
                                <div className="p-2 m-1 text-black">
                                    <Card.Title className="text-center fw-bold">World WarCraft</Card.Title>
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

export default TrendGame;