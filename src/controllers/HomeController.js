export class HomeController {
  async index(req, res, next) {
    res.render("index", {
      title: "Hello World",
      text: "Hamster are the best! 🐹",
    });
  }
}
