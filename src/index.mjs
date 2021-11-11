import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import pkg from "body-parser";
const { json, urlencoded } = pkg;
import cors from "cors";
import noteRouter from "./resources/note/note.router.mjs";
import dotenv from "dotenv";
import { protect } from "./auth.mjs";
import { signup } from "./auth.mjs";
import { signin } from "./auth.mjs";
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

mongoose.connect("mongodb://localhost:27017/myapp").then((data) => {
  console.log("mongo connected");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/api`);
});
