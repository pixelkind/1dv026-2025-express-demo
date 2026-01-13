import mongoose from "mongoose";
import { BASE_SCHEMA } from "./baseSchema.js";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  body: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
});

schema.add(BASE_SCHEMA);

export const PostModel = mongoose.model("Post", schema);
