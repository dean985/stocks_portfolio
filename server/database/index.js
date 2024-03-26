import mongoose from "mongoose";
import userService from "./services/userService.js"
// import authService from "./services/authService.js"
import transactionService from "./services/transactionService.js"

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

export  { userService, transactionService }