import React from "react";

const ButtonPrimary = ({ onClick, ButtonPrimary }) => {
    return (
        <div className="c-ButtonPrimary" onClick={onClick}>
            <h2>{ButtonPrimary}</h2>
        </div>
    );
};

export default ButtonPrimary;
