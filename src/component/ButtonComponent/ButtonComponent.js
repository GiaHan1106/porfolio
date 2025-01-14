import React from "react";

const ButtonComponent = ({ onClick, buttonComponent }) => {
    return (
        <div className="c-ButtonComponent" onClick={onClick}>
            <h2>{buttonComponent}</h2>
        </div>
    );
};

export default ButtonComponent;
