import { Checkmark } from "./Checkmark";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { warning } from "../warning";
import { patchrequest } from "../patchrequest";

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
      const result = boardResponse.status;

      if (result !== 504) {
        const resultResponse = await fetch("http://localhost:5000/increase", {
          method: "PUT",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(resultBody),
        });
        navigate("/submit");
      } else {
        if (patchrequest(boardBody)) {
          navigate("/submit");
        }
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  const combinations =
    ([0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [12, 9, 6, 3]);

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
        style={{ marginLeft: "32%", float: "left" }}
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
        style={{ marginRight: "32%", float: "right" }}
        className="button"
      >
        Leaderboards
      </button>
    </div>
  );
};
