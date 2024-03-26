import mongoose from 'mongoose'
import dotenv from 'dotenv';
import path from 'path';
//TODO Change this to be relative path
const envFilePath = path.resolve('/home/dean/Documents/stocks_portfolio/.env');


import { createUser, getUserById } from './services/userService.js'; 
import { createTransaction, getTransactionById } from './services/transactionService.js'; 



dotenv.config({ path: envFilePath });

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

