import React from "react";
import InforMySelf from "../Home/InforMySelf/InforMySelf";
import ProjectSelf from "./ProjectSelf/ProjectSelf";
import Introduction from "./Introduction/Introduction";
import Skill from "./Skill/Skill";
import Welcome from "./Welcome/Welcome";

const Home = () => {
    return (
        <>
            <Welcome></Welcome>
            <InforMySelf></InforMySelf>
            <Introduction></Introduction>
            <Skill></Skill>
            <ProjectSelf></ProjectSelf>
        </>
    );
};

export default Home;
