const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("TEET")
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log('Server Started at PORT ' + PORT);
  });