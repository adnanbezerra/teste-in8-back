import { Router } from 'express';
import { postSignIn, postSignUp } from '../controllers/UserController';
import { validateSchema } from '../middlewares/ValidateSchema';
import { loginSchema } from '../schemas/LoginSchema';
import { newUserSchema } from '../schemas/NewUserSchema';

export const userRouter = Router();

userRouter.post('/sign-up', validateSchema(newUserSchema), postSignUp);
userRouter.post('/sign-in', validateSchema(loginSchema), postSignIn);
