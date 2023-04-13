const express = require("express");
require("dotenv").config();
const connection = require("./config");

const port = process.env.PORT;

const server = express();

server.get("/", (req, res) => {
  res.send("Welcome to My Movies Server!");
});

server.get("/api/movies", (req, res) => {
  connection.query("Select * from movies;")
    .then(([results]) => {
        if (results) {
            res.status(200).send(results);
        } else {
            res.status(404).send("Not Found!");
        }
    });
});

server.listen(port, () => {
  console.log("listening on port", port);
});
