import { useNavigate } from "react-router-dom"

export const Reset = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>The scores have been reset.</h2>
            <br />
            <button onClick={() => navigate('/')} style={{margin: "20px"}} className="button">New bingo board.</button>
        </div>
    );
};