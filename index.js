const express = require("express")

const app = express()

app.get("/", (request, response) => {
    return response.json({message: "Servidor conectado"})
})

app.listen(3333)