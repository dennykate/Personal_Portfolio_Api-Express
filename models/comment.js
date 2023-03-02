import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  budget: String,
  message: String,
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
