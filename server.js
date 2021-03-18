
const express = require("express");

const app = express();

app.use(express.static("public"))


app.get("/teihnehmer", (req,res,next) => {
    res.status(200).json(["Elahe","Elika","Elnaz", "Mehdi", "Thomas"]);
})

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log("Läuft auf Port" + port) })