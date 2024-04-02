# SW MERN App

## Table of Contents

-   [Overview](#overview)
-   [Documentation](#documentation)
-   [ToDo](#todo)


## Overview
This is a simple MERN (MongoDB, Express.js, React, Node.js) application for managing records. It provides basic CRUD (Create, Read, Update, Delete) operations for a collection of records stored in a MongoDB database. The client-side of the application is built using React with Vite as the build tool and Tailwind CSS for styling.

## Setup
1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/gauravrjoshi/mern-crud.git
   ```

2. **Install Dependencies**:
   - Navigate to the project directory:
     ```bash
     cd server
     ```
   - Install server-side dependencies:
     ```bash
     npm install
     ```
   - Navigate to the client directory:
     ```bash
     cd client
     ```
   - Install client-side dependencies:
     ```bash
     npm install
     ```

3. **Configure Database**:
   - Ensure MongoDB is installed and running locally.
   - Update the database connection details in `../db/connection.js` if necessary.

4. **Run the Application**:
   - Start the server:
     ```bash
     nodemon --env-file=config.env server.js
     ```
   - Start the client (in a separate terminal):
     ```bash
     npm run dev
     ```

5. **Access the Application**:
   - Open your web browser and navigate to `http://localhost:3000` to access the application.

## API Routes
- **GET /record**: Retrieve a list of all records.
- **GET /record/:id**: Retrieve a single record by ID.
- **POST /record**: Create a new record.
- **PATCH /record/:id**: Update a record by ID.
- **DELETE /record/:id**: Delete a record by ID.

## File Structure
- **`server`**: Contains server-side code (Node.js/Express.js).
  - `routes/recordRoutes.js`: Defines API routes for managing records.
  - `db/connection.js`: Establishes connection to MongoDB.
- **`client`**: Contains client-side code (React).
  - `src/`: Contains React source files.
  - `public/`: Contains public assets like images.
  - `vite.config.js`: Configuration file for Vite build tool.

## Dependencies
- **Server-side**:
  - Express.js: Web framework for Node.js.
  - MongoDB: Database driver for MongoDB.
- **Client-side**:
  - React: JavaScript library for building user interfaces.
  - Vite: Next-generation frontend build tool for React.
  - Tailwind CSS: Utility-first CSS framework for styling.



## Learning Resources:
 - [MongoDB Tutorial in 1 Hour (2024) 🍃](https://www.youtube.com/watch?v=J6mDkcqU_ZE)
 - [How to get started with the MERN stack](https://www.mongodb.com/languages/mern-stack-tutorial)
 - [How to Fix Nodemon (nodemon.ps1) Cannot Be Loaded Because Running Scripts is Disabled on This System.](https://dev.to/jumbo02/how-to-fix-nodemon-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system-27km)

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


## Contributing
Contributions are welcome! Please feel free to submit issues or pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
```

This README provides instructions for setting up the MERN application, including details about the server-side and client-side code structure, API routes, dependencies, and how to contribute to the project. It's tailored specifically for your application, incorporating the information you provided about using Vite as the build tool and Tailwind CSS for styling.
```

## TODO

- [x] The frontend basic setup done
- [x] [How to Secure Your MERN Stack App with JWT-Based User Authentication and Authorization](https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/)
- [ ] A single-page MERN app that uses mui react-data-grid + remote MongoDB database displays data table from the MongoDB data source and does server-side filtering based on the filters set by the user on the front-end