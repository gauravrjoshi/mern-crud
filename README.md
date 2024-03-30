# SW MERN APP

## Learning Resources:
 - [MongoDB Tutorial in 1 Hour (2024) 🍃](https://www.youtube.com/watch?v=J6mDkcqU_ZE)
 - [How to get started with the MERN stack](https://www.mongodb.com/languages/mern-stack-tutorial)

## [Documentation](https://docs.google.com/document/d/1fOS9ykJq5JkBTggqGvQehEprqKj2l9jeiW8U49dExWA/edit?usp=sharing)

- [Download MongoDb](https://www.mongodb.com/try/download/community)
- [APIs](https://documenter.getpostman.com/view/21176684/2sA35G42mr)

## Backend

The provided code is a backend implementation for a MERN (MongoDB, Express.js, React.js, Node.js) CRUD (Create, Read, Update, Delete) application for managing phone numbers in a phone book. Let's break down the code and describe its functionality:

1. **Import Dependencies:**
   - `express`: Express.js is used to create the server and handle HTTP requests.
   - `mongoose`: Mongoose is an ODM (Object Data Modeling) library for MongoDB, used to interact with the MongoDB database.
   - `cors`: CORS (Cross-Origin Resource Sharing) middleware is used to enable cross-origin requests.
   - `PhoneBook`: It seems to be a custom model/schema for storing phone numbers.

2. **Server Setup:**
   - An instance of the Express application is created and middleware for JSON parsing (`express.json()`) and CORS handling (`cors()`) are applied.
   - The server listens on port 8080, and a message is logged to indicate that the server is running.

3. **Database Connection:**
   - Mongoose is used to connect to the MongoDB database hosted on MongoDB Atlas.
   - The connection URI and options are provided to `mongoose.connect()` to establish a connection.

4. **Routes:**
   - **POST `/add-phone`:** Adds a new phone number to the database. It expects JSON data containing the phone number details in the request body. Upon successful addition, it returns a success status along with the added phone number data. If an error occurs, it returns a failure status along with an error message.
   - **GET `/get-phone`:** Retrieves all phone numbers from the database. It returns a success status along with an array of phone number data. If an error occurs, it returns a failure status along with an error message.
   - **PATCH `/update-phone/:id`:** Updates a phone number in the database based on the provided `id` parameter. It expects JSON data containing the updated phone number details in the request body. Upon successful update, it returns a success status along with the updated phone number data. If an error occurs, it returns a failure status along with an error message.
   - **DELETE `/delete-phone/:id`:** Deletes a phone number from the database based on the provided `id` parameter. Upon successful deletion, it returns a success status with no data. If an error occurs, it returns a failure status along with an error message.

Overall, this code provides a backend API for managing phone numbers, including adding, retrieving, updating, and deleting phone number entries in the database. It serves as the backend for a MERN CRUD application with MongoDB as the database.


## Run backend server command
```bash
node --env-file=config.env server
```

