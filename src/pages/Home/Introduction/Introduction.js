import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import ButtonSecondary from "../../../component/ButtonSecondary/ButtonSecondary";

const Introduction = () => {
    return (
        <div className="s-Introduction">
            <Container>
                <Row>
                    <Col md={6} lg={4}>
                        <div className="s-Introduction_left">
                            <h1>HELLO !!</h1>
                            <h2>
                                MY NAME IS
                                <Typewriter
                                    options={{
                                        strings: ["GIA HAN"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 75,
                                    }}
                                />
                            </h2>
                            <h3>Front End Developer</h3>
                            <ButtonSecondary ButtonSecondary={"Contact me"} />
                        </div>
                    </Col>
                    <Col md={6} lg={8}>
                        <div className="s-Introduction_right">
                            <h4>Introduce ?</h4>
                            <p>I'm Han , a Front End Developer</p>
                            <ul>
                                <li>My name is Han and I work as a Front End Developer. Let me know if you need any assistance in that area.</li>
                                <li>First, learn the rules then study the literature.</li>
                                <li>I'm interested in front-end development in particular and programming in general.</li>
                                <li>I have determination and effort in my life and commitment to my work.</li>
                            </ul>
                            <div className="s-Introduction_infor">
                                <Row>
                                    <Col xs={6}>
                                        <div className="s-Introduction_infor_child">
                                            <h5>
                                                <span>Name:</span>
                                                Luong Gia Han
                                            </h5>
                                            <p>
                                                <span>age:</span> 23
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="s-Introduction_infor_child">
                                            <h5>
                                                <span>Phone:</span> (84+) 974200611
                                            </h5>
                                            <p>
                                                <span>Email:</span> hgia11062001@gmail.com
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduction;
