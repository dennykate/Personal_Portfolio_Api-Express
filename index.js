import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import CommentRoutes from "./routes/comment.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = process.env.REACT_APP_CONNECTION_URL;
const PORT = process.env.REACT_APP_PORT;

app.get("/", () => {
  return res.send("Sever running");
});

app.use("/comment", CommentRoutes);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Sever running at port ${PORT} `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
