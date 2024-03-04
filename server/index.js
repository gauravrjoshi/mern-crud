// Import the express module to create an Express application
const express = require('express')

// Import the PhoneBook model from the './Model/PhoneBook' file for database operations
const PhoneBook = require('./Model/PhoneBook')

// Load environment variables from the .env file
require('dotenv').config();

// Import the mongoose module to connect to MongoDB and manage database operations
const mongoose = require('mongoose')
// Import the cors module to enable Cross-Origin Resource Sharing
const cors = require('cors')
// Create an instance of an express application
const app = express()

// Middleware to parse JSON bodies in the requests
app.use(express.json())
// Middleware to enable CORS
app.use(cors())
// Retrieve the port number from environment variables
const PORT = process.env.PORT
// Start the server and listen on the specified PORT, log a message when the server is running
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

// Connect to the MongoDB database using the connection string from environment variables
console.log(process.env);
const DB = process.env.DB_CONNECTION_STRING
mongoose.connect(DB, {
    // Connection options (commented out, but can be used for specific MongoDB versions/settings)
}).then(() => {
    console.log('Database connected..') // Log message on successful database connection
})

// Route to add a new phone number to the database
app.post('/add-phone', async (req, res) => {
    const phoneNumber = new PhoneBook(req.body) // Create a new PhoneBook document from request body
    try {
        await phoneNumber.save() // Save the document to the database
        res.status(201).json({
            status: 'Success',
            data: {
                phoneNumber
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

// Route to retrieve all phone numbers from the database
app.get('/get-phone', async (req, res) => {
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
app.patch('/update-phone/:id', async (req, res) => {
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
app.delete('/delete-phone/:id', async (req, res) => {
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
