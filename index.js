import express from "express";

const host = "0.0.0.0";
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("fazer teste World!");
});

app.listen(port, host, () => {
  console.log(`algo app listening on port ${port}`);
});
