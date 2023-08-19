const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      min: [2, "2 minimum name length"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      min: [8, "8 minimum password length"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = {
  User,
};
