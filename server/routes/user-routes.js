import { Router } from "express";
import { loginUser, registerUser, getAllUsers } from "../controllers/user-controller.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/", getAllUsers);

export default userRouter;
