import { json, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { warning } from "./warning";

export const Leaderboard = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/list");
      const jsondata = await response.json();
      setItems(jsondata);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  const onReset = async () => {
    try {
      const response = await fetch("http://localhost:5000/reset", {
        method: "put",
      });
      navigate("/reset");
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td className="tableitem">{item.name}</td>
              <td className="tableitem">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button
        onClick={() => navigate("/")}
        style={{ margin: "20px" }}
        className="button"
      >
        New bingo board.
      </button>
      <button
        onClick={() => navigate("/boards")}
        style={{ margin: "20px" }}
        className="button"
      >
        Saved boards.
      </button>
      <button
        onClick={() => {
          if (warning("reset")) {
            onReset();
          }
        }}
        style={{ margin: "20px" }}
        className="button"
      >
        Reset leaderboards.
      </button>
    </Fragment>
  );
};
