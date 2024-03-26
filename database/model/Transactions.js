import mongoose from 'mongoose';
const { Schema, model } = mongoose;


const transaction_type = {
    SELL: 0,
    BUY: 1,
  };
  
const transactionSchema = new Schema({
  UID: String,
  //TODO make sure it adds time too
  transactionDate: Date,
  currentBalance: Number,
  transactionType: Number,
  // Options are stock ticker or currency. Starting with only stock tickers
  equity: String,
  quantity: Number
});

const Transaction = model('Transaction', transactionSchema);
export default Transaction;