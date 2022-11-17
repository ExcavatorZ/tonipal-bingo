import { useNavigate } from "react-router-dom"

export const Leaderboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            Leaderboard is supposed to come here.
            <br />
            <button onClick={() => navigate('/')} style={{margin: "20px"}} className="button">Back to bingo.</button>
        </div>
    )
}