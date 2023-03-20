import Mongoose from "mongoose";

const NoteBookSchema = new Mongoose.Schema(
  {
    title: { type: Boolean, required: true },
    content: { type: Boolean, required: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const NoteBookModel = Mongoose.model("Notebo0ks", NoteBookSchema);
