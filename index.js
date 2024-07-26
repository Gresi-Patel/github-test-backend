const express = require("express")
const app = express()
require("dotenv").config()

const port = process.env.PORT

app.get("/", (req, res) => {
    res.send("hello herin")
})

app.listen(port, ()=> {
    console.log("server run on port", port);
})