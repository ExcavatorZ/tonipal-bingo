const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const db = require("./db");

app.use(cors());
app.use(express.json());

app.post("/new", async(req, res) => {
    try {
        const { item, quantity } = req.body;
        const newItem = await db.query("INSERT INTO results (item, quantity) VALUES($1,$2) RETURNING *", [item, quantity]);
        res.json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/list", async(req, res) => {
    try {
        const allItems = await db.query("SELECT * FROM results ORDER BY quantity");
        res.json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.put("/update", async(req, res) => {
    try {
        const { item, quantity } = req.body;
        const updateItem = await db.query("UPDATE results SET quantity = quantity + 1 WHERE item = $1", [item])

        res.json("Updated!")
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(port, () => {
    console.log(`Tonipal Bingo listening on port ${port}.`);
});