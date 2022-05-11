import { Router } from "express";
import noteController from "./note.controller.js";
const noteRouter = Router();

// /api/item
noteRouter
  .route("/")
  .get(noteController.getMany)
  .post(noteController.createOne);

// /api/item/:id

noteRouter
  .route("/:id")
  .get(noteController.getOne)
  .put(noteController.updateOne)
  .delete(noteController.removeOne);

export default noteRouter;
