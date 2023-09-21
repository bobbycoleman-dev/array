import { Router } from "express";
import { loginUser, registerUser, getAllUsers, getOneUser } from "../controllers/user-controller.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getOneUser);
userRouter.get("/", getAllUsers);

export default userRouter;
