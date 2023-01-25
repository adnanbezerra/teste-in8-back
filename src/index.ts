import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middlewares/ErrorHandler';
import { userRouter } from './routes/UserRoute';
import { cartRouter } from './routes/CartRoutes';
dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

// routes
server.use(userRouter);
server.use(cartRouter);
server.use(errorHandler);

export default server;
