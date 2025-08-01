import express, { Router } from "express"
import { registerUsers } from "../Controller/UsersController.js";




export const usersRouter = express.Router();



usersRouter.post('/register-Users', registerUsers)