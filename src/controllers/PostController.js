import { PostModel } from "../models/PostModel.js";

export class PostController {
  async loadPost(req, res, next, id) {
    try {
      const post = await PostModel.findById(id);

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
    const posts = await PostModel.find();
    res.render("posts", { posts });
  }

  async detail(req, res, next) {
    res.render("post", { post: req.post });
  }

  async create(req, res, next) {
    res.render("create");
  }

  async createPost(req, res, next) {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).send("Title and body are required");
    }

    const post = await PostModel.create({ title, body });
    res.redirect(`/posts/${post.id}`);
  }
}
