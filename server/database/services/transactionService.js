import Transaction from '../model/Transactions.js';


////////////////////////////////////////////////
//////////////// Read Functions ////////////////
////////////////////////////////////////////////



// Function to get transaction by ID
const getTransactionById = async (transactionId) => {
    try {
        // Use Mongoose's findOne method to find a transaction by ID
        const transaction = await Transaction.findOne({ _id: transactionId });

        // If the transaction is not found, return null
        if (!transaction) {
            return null;
        }

        // If the transaction is found, return the transaction object
        return transaction;
    } catch (error) {
        // If an error occurs, handle it gracefully
        console.error('Error while fetching transaction by ID:', error);
        throw error;
    }
};



////////////////////////////////////////////////
//////////////// Write Functions ///////////////
////////////////////////////////////////////////


// Function to create a new transaction
const createTransaction = async (transactionData) => {
    try {
        // Create a new transaction using the provided transactionData
        const newTransaction = new Transaction(transactionData);

        // Save the new transaction to the database
        await newTransaction.save();

        // Return the ID of the newly created transaction
        return newTransaction._id.toString();
    } catch (error) {
        // If an error occurs, handle it gracefully
        console.error('Error while creating new transaction:', error);
        throw error;
    }
};

export default { getTransactionById, createTransaction };
 