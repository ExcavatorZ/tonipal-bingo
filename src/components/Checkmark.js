import React from "react";
import "../index.css";

export const Checkmark = ({box, onClick}) => {

    return (
        <div className="box" onClick={onClick}>
            {box.value}
        <h1 className="check">{box.checked ? 'X' : ''}</h1>
        </div>
    );
};
