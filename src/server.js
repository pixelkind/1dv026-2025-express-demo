import express from "express";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const directoryFullName = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", join(directoryFullName, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    text: "Hamster are the best! 🐹",
  });
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello I am Garrit</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
