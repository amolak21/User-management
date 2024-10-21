import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
