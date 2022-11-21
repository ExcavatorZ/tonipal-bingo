import { json, useNavigate } from "react-router-dom"
import { Fragment, useState, useEffect } from "react";

export const Leaderboard = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const getItems = async () => {
        try {
            const response = await fetch("http://localhost:5000/list");
            const jsondata = await response.json();
            setItems(jsondata)
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getItems();
    }, []);
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
                    {items.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            Leaderboard is supposed to come here.
            <br />
            <button onClick={() => navigate('/')} style={{margin: "20px"}} className="button">Back to bingo.</button>
        </Fragment>
    )
}