const Pool = require("pg").Pool;

const dbConfig = new Pool({
    user: "postgres",
    password: "admin",
    host: "db",
    port: 5432,
    database: "bingo"
});

const creation = () => {
    dbConfig.query('CREATE TABLE IF NOT EXISTS public."results"("id" SERIAL NOT NULL PRIMARY KEY, "name" varchar(20) UNIQUE, "quantity" integer NOT NULL default(0))', (err, res) => {
        console.log(err, res);
    });
};

const populate = () => {
    try {
        const bingoItems = ["Kahvi", "Energiajuoma", "Kuohuvesi", "Leipä", "Nyssykkä", "Patukka",
        "Mikroateria", "Sushi", "Palautusjuoma", "Banaani", "Joku rahka hömmeli", "Roiskeläppä",
        "Pähkinäpussi", "Energiavesi", "Tikkukaramelli", "Salaatti"];
        for (const item in bingoItems) {
            dbConfig.query('INSERT INTO public."results"("name") VALUES($1) ON CONFLICT ("name") DO NOTHING', [bingoItems[item]]);
        }
    } catch (err) {
        console.error(err.message)
    }
}

exports.dbConfig = dbConfig;
exports.creation = creation;
exports.populate = populate;