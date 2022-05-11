import { Router } from "express";
import { me } from "./user.controller.js";
import { updateMe } from "./user.controllerjs";

const userRouter = Router();

userRouter.get("/", me);
userRouter.put("/", updateMe);

export default userRouter;
