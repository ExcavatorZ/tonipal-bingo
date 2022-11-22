const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());
db.dbConfig.connect();
db.creation();
db.populate();

app.post("/new", async(req, res) => {
    try {
        const { name, quantity } = req.body;
        const newItem = await db.dbConfig.query("INSERT INTO results (name, quantity) VALUES($1,$2) RETURNING *", [name, quantity]);
        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/list", async(req, res) => {
    try {
        const allItems = await db.dbConfig.query("SELECT * FROM results ORDER BY quantity DESC");
        res.json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/update", async(req, res) => {
    try {
        const checkedList = req.body;
        for (const checked of checkedList) {
            const updateItem = await db.dbConfig.query("UPDATE results SET quantity = quantity + 1 WHERE name = $1", [checked]);
        };
        res.json("Updated!");
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/reset", async(req, res) => {
    try {
        const zeroItems = await db.dbConfig.query("UPDATE results SET quantity = 0");
        res.json("Reset done.");
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log(`Tonipal Bingo listening on port ${port}.`);
});