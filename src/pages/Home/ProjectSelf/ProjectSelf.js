// ProjectSelf.js
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadLine from "../../../component/Headline/Headline";
import project1 from "../../../assets/project/project1.png";
import project2 from "../../../assets/project/project2.png";
import project3 from "../../../assets/project/project3.png";
import project4 from "../../../assets/project/project4.png";
import project5 from "../../../assets/project/project5.png";
import project6 from "../../../assets/project/project6.png";
import project7 from "../../../assets/project/project7.png";
import project8 from "../../../assets/project/project8.png";
import ButtonComponent from "../../../component/ButtonComponent/ButtonComponent";

const ProjectSelf = () => {
    const [showMore, setShowMore] = useState(false);

    const listProject = [
        {
            id: 1,
            image: project1,
            link: "https://larana-fashion.vercel.app/",
        },
        {
            id: 2,
            image: project2,
            link: "https://giahan1106.github.io/landingpage_delici/",
        },
        {
            id: 3,
            image: project3,
            link: "https://giahan1106.github.io/Filmlane/",
        },
        {
            id: 4,
            image: project4,
            link: "https://pet-shop-topaz-eight.vercel.app/",
        },
        {
            id: 5,
            image: project5,
            link: "https://burger-lading-page.vercel.app/",
        },
        {
            id: 6,
            image: project6,
            link: "https://giahan1106.github.io/hotel/",
        },
        {
            id: 7,
            image: project7,
            link: "https://giahan1106.github.io/Minimart/",
        },
        {
            id: 8,
            image: project8,
            link: "https://giahan1106.github.io/flacico/",
        },
    ];

    const displayedProjects = showMore ? listProject : listProject.slice(0, 4);
    return (
        <div className="s-ProjectSelf">
            <Container>
                <HeadLine headline={"My Project"}></HeadLine>
                <Row>
                    {displayedProjects.map((item) => (
                        <Col md={12} lg={6} key={item.id}>
                            <div className="s-ProjectSelf_card">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <div className="s-ProjectSelf_card__img-container">
                                        <img src={item.image} alt={`Project ${item.id}`} />
                                    </div>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>
                {!showMore && <ButtonComponent onClick={() => setShowMore(true)} buttonComponent={"Show More"} />}
            </Container>
        </div>
    );
};

export default ProjectSelf;
