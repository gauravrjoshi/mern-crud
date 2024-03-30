
import express from "express";

// Import the PhoneBook model from the './Model/PhoneBook' file for database operations
import PhoneBook from "../Model/PhoneBook.js";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const routerPhoneBook = express.Router();

// Route to add a new phone number to the database
routerPhoneBook.post('/add-phone', async (req, res) => {
    try {
        const phoneNumber = new PhoneBook(req.body); // Create a new PhoneBook document from request body
        const savedPhoneNumber = await phoneNumber.save(); // Save the document to the database
        res.status(201).json({
            status: 'Success',
            data: {
                phoneNumber: savedPhoneNumber // Return the saved document
            }
        });
    } catch (err) {
        let errorMessage = 'Internal Server Error';
        let statusCode = 500;

        // Check if it's a validation error
        if (err.name === 'ValidationError') {
            statusCode = 400;
            errorMessage = extractValidationErrorMessage(err);
        } else {
            console.error('Error:', err); // Log the error for debugging
        }

        res.status(statusCode).json({
            status: 'Failed',
            message: errorMessage
        });
    }
});

// Function to extract validation error messages
function extractValidationErrorMessage(err) {
    const errors = Object.values(err.errors).map(error => error.message);
    return errors.join('; ');
}



// Route to retrieve all phone numbers from the database
routerPhoneBook.get('/get-phone', async (req, res) => {
    const phoneNumbers = await PhoneBook.find({}) // Find all documents in the PhoneBook collection
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                phoneNumbers
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

// Route to update a specific phone number in the database by ID
routerPhoneBook.patch('/update-phone/:id', async (req, res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated document
        runValidators: true // Run schema validation rules on the update operation
    })
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                updatedPhone
            }
        })
    } catch (err) {
        console.log(err)
    }
})

// Route to delete a specific phone number from the database by ID
routerPhoneBook.delete('/delete-phone/:id', async (req, res) => {
    await PhoneBook.findByIdAndDelete(req.params.id) // Delete the document with the specified ID
    try {
        res.status(204).json({
            status: 'Success',
            data: {}
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})
export default routerPhoneBook;