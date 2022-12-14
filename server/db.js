const Pool = require("pg").Pool;

const dbConfig = new Pool({
  user: "postgres",
  password: "admin",
  host: "db",
  port: 5432,
  database: "bingo",
});

const creation = () => {
  dbConfig.query(
    'CREATE TABLE IF NOT EXISTS public."results"("id" SERIAL NOT NULL PRIMARY KEY, "name" varchar(20) UNIQUE, "quantity" integer NOT NULL default(0))',
    (err, res) => {
      console.log(err, res);
    }
  );
  dbConfig.query(
    'CREATE TABLE IF NOT EXISTS public."boards"("id" SERIAL NOT NULL PRIMARY KEY, "date" timestamp without time zone default CURRENT_TIMESTAMP NOT NULL, "items" text[],"bingos" integer default(0))',
    (err, res) => {
      console.log(err, res);
    }
  );
  dbConfig.query(
    'CREATE UNIQUE INDEX IF NOT EXISTS "DAY" ON public."boards"(EXTRACT("day" FROM "date"), EXTRACT("month" FROM "date"), EXTRACT("year" FROM "date"))',
    (err, res) => {
      console.log(err, res);
    }
  );
  dbConfig.query(
    'ALTER TABLE public."boards" ADD COLUMN IF NOT EXISTS "extra_info" varchar(104)',
    (err, res) => {
      console.log(err, res);
    }
  );
};

const populate = () => {
  try {
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
    for (const item of bingoItems) {
      dbConfig.query(
        'INSERT INTO public."results"("name") VALUES($1) ON CONFLICT ("name") DO NOTHING',
        [item]
      );
    }
  } catch (err) {
    console.error(err.message);
  }
};

exports.dbConfig = dbConfig;
exports.creation = creation;
exports.populate = populate;
