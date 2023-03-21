import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      validate: /^[a-zA-Z0-9_-]{3,16}$/,
    },
    email: {
      type: String,
      required: true,
      validate: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      validate: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    },
    contactNumber: {
      type: String,
      required: true,
      validate: /^\+[0-9]{1,3}[0-9]{3,14}$/,
    },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const UserModel = Mongoose.model("Users", UserSchema);
