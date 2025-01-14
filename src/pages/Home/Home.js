import React from "react";
import InforMySelf from "../Home/InforMySelf/InforMySelf";
import ProjectSelf from "./ProjectSelf/ProjectSelf";
import Introduction from "./Introduction/Introduction";
// import MilkTea from "./MilkTea/MilkTea";
// import Map from "./Map/Map";

const Home = () => {
    return (
        <>
            <Introduction></Introduction>
            <InforMySelf></InforMySelf>
            <ProjectSelf></ProjectSelf>
        </>
    );
};

export default Home;
