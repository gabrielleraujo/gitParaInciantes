const express = require("express");
const exp = express();

exp.get("/", (req, res) => {
    res.status(400).send( { message: "Esse é meu novo repositório clonado"} );
})

exp.listen(4001, () => {
    console.log("Api rodando na porta 4001.");
})