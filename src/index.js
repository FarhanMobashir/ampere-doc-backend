import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import pkg from "body-parser";
const { json, urlencoded } = pkg;
import cors from "cors";
import noteRouter from "./resources/note/note.router.js";
import dotenv from "dotenv";
import { protect } from "./auth.js";
import { signup } from "./auth.js";
import { signin } from "./auth.js";
const app = express();
const port = 3000;
dotenv.config();
app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.post("/signup", signup);
app.post("/signin", signin);

// app.use("/api", protect);
app.use("/api/note", protect, noteRouter);

mongoose.connect(process.env.MONGO_URI).then((data) => {
  console.log("mongo connected");
});

app.listen(process.env.PORT, () => {
  console.log(
    `App listening on http://${process.env.HOSTNAME}:${process.env.PORT}/api`
  );
});
