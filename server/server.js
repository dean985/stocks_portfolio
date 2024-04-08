import { userService, transactionService } from "./database/index.js";
import express from "express"
import { initControllers } from './controllers/index.js'

const app = express();
initControllers(app)
const port = 3000;




