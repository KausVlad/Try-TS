import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello World from Express with Typescript!");
});

app.listen(8000, () => {
  console.log("Listening on port 3000");
})