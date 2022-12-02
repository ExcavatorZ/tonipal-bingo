import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Submit = () => {
  const navigate = useNavigate();

  const [bingoAmount, setBingoAmount] = useState([]);

  const getBoard = async () => {
    try {
      const lastBoard = await fetch("http://localhost:5000/last")
        .then((data) => {
          console.log(data);
          return data.json();
        })
        .then((item) => {
          setBingoAmount(item.rows[0].bingos);
          console.log(item.rows[0].bingos);
          return item.rows[0].bingos;
        });
    } catch (err) {
      console.error(err.message);
    }
  };
  getBoard();
  console.log(bingoAmount);
  return (
    <div>
      Your scores have been submitted! {bingoAmount}
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
        onClick={() => navigate("/results")}
        style={{ margin: "20px" }}
        className="button"
      >
        Leaderboards
      </button>
    </div>
  );
};
