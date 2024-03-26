import mongoose from "mongoose";
import User from "./model/User.js";

////////////////////////////////////////////////
//////////////// Read Functions ////////////////
////////////////////////////////////////////////

// Define an asynchronous function to query the database
const getUserById = async (userId) => {
  try {
    // Use Mongoose's findOne method to find a user by ID
    const user = await User.findOne({ _id: userId });

    // If the user is not found, return null
    if (!user) {
      return null;
    }

    // If the user is found, return the user object
    return user._id.toString();
  } catch (error) {
    // If an error occurs, handle it gracefully
    console.error("Error while fetching user by ID:", error);
    throw error; // You can choose to handle errors differently
  }
};

////////////////////////////////////////////////
//////////////// Write Functions ///////////////
////////////////////////////////////////////////

const createUser = async (userData) => {
  try {
    // Create a new user using the provided userData
    const newUser = new User(userData);

    // Save the new user to the database
    await newUser.save();

    // Return the ID of the newly created user
    return newUser._id.toString();
  } catch (error) {
    // If an error occurs, handle it gracefully
    console.error("Error while creating new user:", error);
    throw error; // You can choose to handle errors differently
  }
};

// Export the asynchronous functions 
export { getUserById };
export { createUser };
