import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

function Intro(){
    return (
        <div className="intro">
            <Container className="text-white text-center d-flex justify-content-center align-items-center">
                <Row>
                    <Col>
                        <div className="title">ON TARGET</div>
                        <div className="title">Mission Complete</div>
                        <div className="introButton mt-4 text-center">
                            <Button variant="dark" className="button">
                                See All List
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro;