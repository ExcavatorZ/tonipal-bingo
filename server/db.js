const Pool = require("pg").Pool;

const dbConfig = new Pool({
    user: "postgres",
    password: "admin",
    host: "db",
    port: 5432,
    database: "bingo"
});

module.exports = dbConfig;