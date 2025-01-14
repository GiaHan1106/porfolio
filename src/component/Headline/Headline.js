import React from "react";

const HeadLine = (props) => {
    return (
        <div className="c-headline">
            <h2>
                <i className="fa-solid fa-lightbulb"></i>
                {props.headline}
            </h2>
        </div>
    );
};

export default HeadLine;
