import React from "react";
import InforMySelf from "../Home/InforMySelf/InforMySelf";
import ProjectSelf from "./ProjectSelf/ProjectSelf";
import Introduction from "./Introduction/Introduction";
import Skill from "./Skill/Skill";

const Home = () => {
    return (
        <>
            <Introduction></Introduction>
            <InforMySelf></InforMySelf>
            <Skill></Skill>
            <ProjectSelf></ProjectSelf>
        </>
    );
};

export default Home;
