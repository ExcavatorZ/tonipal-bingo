const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("helloworld");
})

app.listen(port, () => {
    console.log(`Tonipal Bingo listening on port ${port}.`);
});