import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello LNU Express");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello I am Garrit</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
