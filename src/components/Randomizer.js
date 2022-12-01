import { Checkmark } from "./Checkmark";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
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
  const combinations = useMemo(
    () => [
      [bingoBoard[0], bingoBoard[1], bingoBoard[2], bingoBoard[3]],
      [bingoBoard[4], bingoBoard[5], bingoBoard[6], bingoBoard[7]],
      [bingoBoard[8], bingoBoard[9], bingoBoard[10], bingoBoard[11]],
      [bingoBoard[12], bingoBoard[13], bingoBoard[14], bingoBoard[15]],
      [bingoBoard[0], bingoBoard[4], bingoBoard[8], bingoBoard[12]],
      [bingoBoard[1], bingoBoard[5], bingoBoard[9], bingoBoard[13]],
      [bingoBoard[2], bingoBoard[6], bingoBoard[10], bingoBoard[14]],
      [bingoBoard[3], bingoBoard[7], bingoBoard[11], bingoBoard[15]],
      [bingoBoard[0], bingoBoard[5], bingoBoard[10], bingoBoard[15]],
      [bingoBoard[12], bingoBoard[9], bingoBoard[6], bingoBoard[3]],
    ],
    [bingoBoard]
  );

  const [bingoCounter, setBingoCounter] = useState(0);

  useEffect(() => {
    let counter = 0;
    for (const combination of combinations) {
      if (
        combination[0].checked &&
        combination[1].checked &&
        combination[2].checked &&
        combination[3].checked
      ) {
        counter++;
      }
    }
    setBingoCounter(counter);
  }, [bingoBoard, combinations]);

  console.log(bingoCounter);
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
