import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadLine from "../../../component/Headline/Headline";
import project from "../../../assets/project/project1.png";
const ProjectSelf = () => {
    return (
        <div className="s-ProjectSelf">
            <Container>
                <HeadLine headline={"My Project"}></HeadLine>
                <Row>
                    <Col md={12} lg={4}>
                        <div className="s-ProjectSelf_card">
                            <img src={project} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectSelf;
