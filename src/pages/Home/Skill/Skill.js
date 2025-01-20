import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadLine from "../../../component/Headline/Headline";
import img1 from "../../../assets/skill/html.png";
import img2 from "../../../assets/skill/js.png";
import img3 from "../../../assets/skill/typescript.png";
import img4 from "../../../assets/skill/nodejs.png";
import img5 from "../../../assets/skill/css.png";
import img6 from "../../../assets/skill/sass.png";
import img7 from "../../../assets/skill/React.png";
import img8 from "../../../assets/skill/bootstrap.svg";
import img9 from "../../../assets/skill/docker.webp";
import img10 from "../../../assets/skill/restfull.png";
import img11 from "../../../assets/skill/sql.png";
import img12 from "../../../assets/skill/tailwind.png";

const Skill = () => {
    const listImg = [
        {
            id: 1,
            image: img1,
            text: "HTML5",
        },
        {
            id: 2,
            image: img2,
            text: "JS",
        },
        {
            id: 3,
            image: img3,
            text: "TypeScripts",
        },
        {
            id: 4,
            image: img4,
            text: "Node Js",
        },
        {
            id: 5,
            image: img5,
            text: "Css",
        },
        {
            id: 6,
            image: img6,
            text: "Sass",
        },
        {
            id: 7,
            image: img7,
            text: "React",
        },
        {
            id: 8,
            image: img8,
            text: "Bootstrap",
        },

        {
            id: 9,
            image: img9,
            text: "Docker",
        },
        {
            id: 10,
            image: img10,
            text: "Restfull",
        },
        {
            id: 11,
            image: img11,
            text: "SQL",
        },
        {
            id: 12,
            image: img12,
            text: "Docker",
        },
    ];
    return (
        <div className="s-skill">
            <Container>
                <HeadLine headline={"Skill"} />
                <Row>
                    {listImg.map((item) => (
                        <Col xs={6} md={4} key={item.id}>
                            <div className="s-skill_card">
                                <img src={item.image} alt="" />
                                <h5>{item.text}</h5>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Skill;
