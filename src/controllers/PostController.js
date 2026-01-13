export class PostController {
  #posts = [
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

  #getPostById(id) {
    return this.#posts.find((p) => p.id === id);
  }

  async loadPost(req, res, next, id) {
    try {
      const postId = Number(id);
      const post = this.#getPostById(postId);

      if (!post) {
        const error = new Error("The post you requested does not exist.");
        error.status = 404;
        throw error;
      }

      req.post = post;
      next();
    } catch (error) {
      next(error);
    }
  }

  async index(req, res, next) {
    const posts = this.#posts;
    res.render("posts", { posts });
  }

  async detail(req, res, next) {
    res.render("post", { post: req.post });
  }
}
