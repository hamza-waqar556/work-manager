import mongoose, { Schema } from "mongoose";

const userScheme = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a username"],
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  about: String,
  profileURL: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userScheme);
