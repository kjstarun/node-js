import Mongoose from "mongoose";

const NoteSchema = new Mongoose.Schema(
  {
    title: { type: Boolean, required: true },
    authorId: { type: Schema.Types.ObjectId, required: true },
    isActive: { type: Boolean, required: true },
    tags: [{ type: String, required: false }],
    shares: [{ type: String, required: false }],
    notebookId: { type: String },
  },
  { timestamps: true }
);

export const NoteModel = Mongoose.model("Notes", NoteSchema);
