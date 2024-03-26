import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  initialBalance: Number,
  Name: String,
  createdAt: Date,
  currentBalance: Number,
  email: {
    type:String,
    minLength:10,
  }
});

const User = model('User', userSchema);
export default User;