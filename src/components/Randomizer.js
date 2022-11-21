import { Checkmark } from "./Checkmark";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const bingoItems = ["Kahvi", "Energiajuoma", "Kuohuvesi", "Leipä", "Nyssykkä", "Patukka",
"Mikroateria", "Sushi", "Palautusjuoma", "Banaani", "Joku rahka hömmeli", "Roiskeläppä",
"Pähkinäpussi", "Energiavesi", "Tikkukaramelli", "Salaatti"];

export const Randomizer = () => {
    const [bingoBoard, setBingoBoard] = useState(() => bingoItems
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => ({value, checked:false})));

    const navigate = useNavigate();

    const onSubmitForm = async event => {
        event.preventDefault();
        try {
            const body = bingoBoard
              .filter(({checked}) => checked)
              .map(({value}) => value);

            const response = await fetch("http://localhost:5000/update", {
                method: "PUT",
                headers: {"Content-Type": "Application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            navigate("/submit");
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <div>
            <section id="board">
                {bingoBoard.map(box => {
                    return <div key={box.value} className="box">{box.value}<Checkmark checked={box.checked} onClick={() => {
                        setBingoBoard(bingoBoard => bingoBoard.map(row_ => row_ === box ? {...row_, checked: !row_.checked} : row_))
                    }}/></div>
                })}
            </section>
            <br/>
            <button onClick={onSubmitForm} style={{marginLeft: "630px", float: "left"}} className="button">Submit</button>
            <button onClick={() => navigate("/results")} style={{marginRight: "630px", float: "right"}} className="button">Leaderboards</button>
      </div>
    );
    };
