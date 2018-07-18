const express = require("express");
const app = express();
const PORT = 8080;
// app.set("view engine", "ejs");


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile("views/app.html", {root: __dirname })
});



