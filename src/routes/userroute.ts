import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();

const userController = new UserController();


userRouter.get('/user', userController.index);
userRouter.get('/user/:id', userController.indexById);
userRouter.post('/user', userController.create);
userRouter.put('/user/:id', userController.update);

export default userRouter;
