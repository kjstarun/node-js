import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contactNumber: { type: String, required: true },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const UserModel = Mongoose.model("Users", UserSchema);
