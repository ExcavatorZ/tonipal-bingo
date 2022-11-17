import { useNavigate } from "react-router-dom"
import { Fragment } from "react";

export const Leaderboard = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <table class="table alignitems-center text-center">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nyssykkä</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            Leaderboard is supposed to come here.
            <br />
            <button onClick={() => navigate('/')} style={{margin: "20px"}} className="button">Back to bingo.</button>
        </Fragment>
    )
}