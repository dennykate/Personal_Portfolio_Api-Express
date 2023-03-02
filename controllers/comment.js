import Comment from "../models/comment.js";

export const createComment = async (req, res) => {
  const { name, email, phone, budget, message } = req.body;

  if (!name || !email || !phone || !budget || !message) {
    return res.status(400).json({ message: "require all data" });
  }

  const newComment = new Comment({
    name,
    email,
    phone,
    budget,
    message,
  });

  try {
    await newComment.save();

    return res.status(201).json({ message: "action success" });
  } catch (error) {
    return res.status(400).json({ message: "action fail" });
  }
};
