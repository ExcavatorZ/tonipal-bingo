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

    const onSubmitForm = async event => {
        event.preventDefault();
        try {
            const body = {"name": "Nyssykkä", "quantity": 1};
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
                <div className="box">{newBingo[0]}<Checkmark /></div>
                <div className="box">{newBingo[1]}<Checkmark /></div>
                <div className="box">{newBingo[2]}<Checkmark /></div>
                <div className="box">{newBingo[3]}<Checkmark /></div>
                <div className="box">{newBingo[4]}<Checkmark /></div>
                <div className="box">{newBingo[5]}<Checkmark /></div>
                <div className="box">{newBingo[6]}<Checkmark /></div>
                <div className="box">{newBingo[7]}<Checkmark /></div>
                <div className="box">{newBingo[8]}<Checkmark /></div>
                <div className="box">{newBingo[9]}<Checkmark /></div>
                <div className="box">{newBingo[10]}<Checkmark /></div>
                <div className="box">{newBingo[11]}<Checkmark /></div>
                <div className="box">{newBingo[12]}<Checkmark /></div>
                <div className="box">{newBingo[13]}<Checkmark /></div>
                <div className="box">{newBingo[14]}<Checkmark /></div>
                <div className="box">{newBingo[15]}<Checkmark /></div>
            </section>
            <br/>
            <button onClick={onSubmitForm} style={{marginLeft: "630px", float: "left"}} className="button">Submit</button>
            <button onClick={() => navigate("/results")} style={{marginRight: "630px", float: "right"}} className="button">Leaderboards</button>
      </div>
    );
    };
