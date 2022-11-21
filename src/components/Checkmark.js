import React from "react";
import "../index.css";

export const Checkmark = ({checked, onClick}) => {

    return (
        <>
        <h1>{checked ? 'X' : ''}</h1>
        <div onClick={onClick} id="invisibletext">
            asdasdasdasdasdasd
            asdasdasdasdasdasd
            asdasdasdasdasdasd
        </div>
        </>
    );
};
