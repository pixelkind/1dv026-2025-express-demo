import { UserModel } from "../models/UserModel.js";

export class AuthController {
  loginForm(req, res) {
    res.render("login");
  }

  async login(req, res) {
    const { username, password } = req.body;

    const user = await UserModel.authenticate(username, password);
    if (!user) {
      return res.send("Invalid credentials");
    }

    req.session.userId = user.id;
    res.redirect("/posts");
  }

  logout(req, res) {
    req.session.destroy(() => {
      res.redirect("/auth/login");
    });
  }
}
