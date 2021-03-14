const express = require("express");

const app = express();

const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "",
  database: "cruddatabase"
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Star Wars', 'great');";
  db.query(sqlInsert, (err, result) => {
    res.send("coucou du back");
  });
});

app.listen(3001, () => {
  console.log("sur port 3001");
});
