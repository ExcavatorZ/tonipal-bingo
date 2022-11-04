const bingoItems = ["Kahvi", "Energiajuoma", "Kuohuvesi", "Leipä", "Nyssykkä", "Patukka",
"Mikroateria", "Sushi", "Palautusjuoma", "Banaani", "Joku rahka hömmeli", "Roiskeläppä",
"Pähkinäpussi", "Energiavesi", "Tikkukaramelli", "Salaatti"];

const Randomizer = () => {
    const newBingo = bingoItems
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return newBingo;
    };

export default Randomizer