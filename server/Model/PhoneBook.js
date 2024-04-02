import mongoose from 'mongoose'

// TODO: Need to explore, why I need to call connect function in this model
mongoose.connect(process.env.SW_DB_URI, {
    // Connection options (commented out, but can be used for specific MongoDB versions/settings)
}).then(() => {
    console.log('Database connected..') // Log message on successful database connection
})

const PhoneBookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})

const PhoneBook = mongoose.model('PhoneBook', PhoneBookSchema)

export default PhoneBook;