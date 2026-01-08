import express from "express";
import expressLayouts from "express-ejs-layouts";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const posts = [
  {
    id: 1,
    title: "Day 1: I Finally Understand What a Server Does",
    body: "Turns out a server is not just a mysterious computer in a basement. It listens, it responds, and it never sleeps. Unlike me.",
  },
  {
    id: 2,
    title: "Why Nothing Happened When I Opened the Browser",
    body: "I forgot to start the server. Again. At this point, this mistake feels like a tradition.",
  },
  {
    id: 3,
    title: "EJS: HTML, But With Feelings",
    body: "At first it looked like normal HTML. Then I saw JavaScript inside it. I was confused, but in a productive way.",
  },
  {
    id: 4,
    title: "The URL Had an ID and Suddenly Everything Made Sense",
    body: "When I saw /posts/3 working, I realized URLs can carry data. My mind expanded slightly.",
  },
  {
    id: 5,
    title: "One Route, Many Pages",
    body: "It feels illegal that the same template can render multiple pages. I will not question it.",
  },
];

function getPostById(id) {
  return posts.find((p) => p.id === id);
}

const directoryFullName = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", join(directoryFullName, "views"));

app.set("layout", join(directoryFullName, "views", "layouts", "default"));
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);
app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello World",
    text: "Hamster are the best! 🐹",
  });
});

app.get("/about", (req, res) => {
  res.send("<h1>Hello I am Garrit</h1>");
});

app.get("/posts", (req, res) => {
  res.render("posts", { posts });
});

app.get("/posts/:id", (req, res) => {
  const postId = Number(req.params.id);
  const post = getPostById(postId);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("post", { post });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
