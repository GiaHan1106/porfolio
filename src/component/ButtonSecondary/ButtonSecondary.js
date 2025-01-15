import React from "react";

const ButtonSecondary = ({ onClick, ButtonSecondary }) => {
    return (
        <div className="c-ButtonSecondary" onClick={onClick}>
            <h4>{ButtonSecondary}</h4>
        </div>
    );
};

export default ButtonSecondary;
