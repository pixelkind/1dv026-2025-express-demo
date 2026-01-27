import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { BASE_SCHEMA } from "./baseSchema.js";

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
    minlength: 10,
  },
});

schema.add(BASE_SCHEMA);

schema.pre("save", async function () {
  this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
});

schema.statics.authenticate = async function (username, password) {
  const userDocument = await this.findOne({ username });

  if (!userDocument) {
    return null;
  }
  if (await bcrypt.compare(password, userDocument?.passwordHash)) {
    return userDocument;
  }
  return null;
};

export const UserModel = mongoose.model("User", schema);
