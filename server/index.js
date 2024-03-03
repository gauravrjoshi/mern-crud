const express = require('express')

const PhoneBook = require('./Model/PhoneBook')

require('dotenv').config();

// Database Code
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// Server 
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

// Database Code
console.log(process.env);
const DB = process.env.DB_CONNECTION_STRING
mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected..')
})



app.post('/add-phone', async (req, res) => {
    const phoneNumber = new PhoneBook(req.body)
    try {
        await phoneNumber.save()
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


app.get('/get-phone', async (req, res) => {
    const phoneNumbers = await PhoneBook.find({})
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


app.patch('/update-phone/:id', async (req, res) => {
    const updatedPhone = await PhoneBook.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
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


app.delete('/delete-phone/:id', async (req, res) => {
    await PhoneBook.findByIdAndDelete(req.params.id)

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