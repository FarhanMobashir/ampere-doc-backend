import { Router } from "express";
import { me } from "./user.controller.mjs";
import { updateMe } from "./user.controller.mjs";

const userRouter = Router();

userRouter.get("/", me);
userRouter.put("/", updateMe);

export default userRouter;
