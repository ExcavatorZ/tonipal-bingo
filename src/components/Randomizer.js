import { Checkmark } from "./Checkmark";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { warning } from "../warning";

const bingoItems = [
  "Kahvi",
  "Energiajuoma",
  "Kuohuvesi",
  "Leipä",
  "Nyssykkä",
  "Patukka",
  "Mikroateria",
  "Sushi",
  "Palautusjuoma",
  "Banaani",
  "Joku rahka hömmeli",
  "Roiskeläppä",
  "Pähkinäpussi",
  "Energiavesi",
  "Tikkukaramelli",
  "Salaatti",
];

export const Randomizer = () => {
  const [bingoBoard, setBingoBoard] = useState(() =>
    bingoItems
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => ({ value, checked: false }))
  );

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const resultBody = bingoBoard
        .filter(({ checked }) => checked)
        .map(({ value }) => value);
      const boardBody = resultBody;
      boardBody.push(boardBody.length);

      const boardResponse = await fetch("http://localhost:5000/insert", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(boardBody),
      });

      const resultResponse = await fetch("http://localhost:5000/update", {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(resultBody),
      });
      navigate("/submit");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <section id="board">
        {bingoBoard.map((box) => {
          return (
            <Checkmark
              key={box.value}
              box={box}
              onClick={() => {
                setBingoBoard((bingoBoard) =>
                  bingoBoard.map((row_) =>
                    row_ === box ? { ...row_, checked: !row_.checked } : row_
                  )
                );
              }}
            />
          );
        })}
      </section>
      <br />
      <button
        onClick={() => {
          if (warning("submit")) {
            onSubmit();
          }
        }}
        style={{ marginLeft: "630px", float: "left" }}
        className="button"
      >
        Submit
      </button>
      <button
        onClick={() => {
          if (warning("results")) {
            navigate("/results");
          }
        }}
        style={{ marginRight: "630px", float: "right" }}
        className="button"
      >
        Leaderboards
      </button>
    </div>
  );
};
