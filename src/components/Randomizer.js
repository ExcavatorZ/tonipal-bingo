import { Checkmark } from "./Checkmark";
import { useNavigate } from "react-router-dom";

const bingoItems = ["Kahvi", "Energiajuoma", "Kuohuvesi", "Leipä", "Nyssykkä", "Patukka",
"Mikroateria", "Sushi", "Palautusjuoma", "Banaani", "Joku rahka hömmeli", "Roiskeläppä",
"Pähkinäpussi", "Energiavesi", "Tikkukaramelli", "Salaatti"];

export const Randomizer = () => {
    const newBingo = bingoItems
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    const navigate = useNavigate();

    return (
        <div>
            <section id="board">
                <div className="box a">{newBingo[0]}<Checkmark /></div>
                <div className="box b">{newBingo[1]}<Checkmark /></div>
                <div className="box c">{newBingo[2]}<Checkmark /></div>
                <div className="box d">{newBingo[3]}<Checkmark /></div>
                <div className="box e">{newBingo[4]}<Checkmark /></div>
                <div className="box f">{newBingo[5]}<Checkmark /></div>
                <div className="box g">{newBingo[6]}<Checkmark /></div>
                <div className="box h">{newBingo[7]}<Checkmark /></div>
                <div className="box i">{newBingo[8]}<Checkmark /></div>
                <div className="box j">{newBingo[9]}<Checkmark /></div>
                <div className="box k">{newBingo[10]}<Checkmark /></div>
                <div className="box l">{newBingo[11]}<Checkmark /></div>
                <div className="box m">{newBingo[12]}<Checkmark /></div>
                <div className="box n">{newBingo[13]}<Checkmark /></div>
                <div className="box o">{newBingo[14]}<Checkmark /></div>
                <div className="box p">{newBingo[15]}<Checkmark /></div>
            </section>
            <br/>
            <button onClick={() => navigate("/submit")} style={{marginLeft: "630px", float: "left"}} className="button">Submit</button>
            <button onClick={() => navigate("/results")} style={{marginRight: "630px", float: "right"}} className="button">Leaderboards</button>
      </div>
    );
    };
