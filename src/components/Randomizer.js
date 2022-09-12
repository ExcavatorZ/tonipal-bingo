const bingoItems = ["Kahvi", "Energiajuoma", "Kuohuvesi", "Leipä", "Nyssykkä", "Patukka",
"Mikroateria", "Sushi", "Palautusjuoma", "Banaani", "Joku rahka hömmeli", "Makeispussi",
"Pähkinäpussi", "Energiavesi", "Tikkukaramelli", "Patonki"];

const Randomizer = () => {
    const newBingo = bingoItems
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return newBingo;
    };

export default Randomizer