import React, { useState } from "react";
import "../index.css";

const Checkmark = () => {
    const [mark, setMark] = useState('');

    const handleClick = () => {
        if (mark === '') {
            setMark('X');
        } else {
            setMark('');
        }
    };
    return (
        <>
        <h1>{mark}</h1>
        <div onClick={handleClick} id="invisibletext">
            asdasdasdasdasdasd
            asdasdasdasdasdasd
            asdasdasdasdasdasd
        </div>
        </>
    );
};

export default Checkmark