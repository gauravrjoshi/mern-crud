# MERN-CRUD

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



### [CREATE](http://localhost:8080/add-phone)

<!-- ![CRUD Application Screenshot](https://raw.githubusercontent.com/gauravrjoshi/mern-crud/main/img/create.png "CRUD App Interface") -->
<img src="https://raw.githubusercontent.com/gauravrjoshi/mern-crud/main/img/create.png" alt="CRUD Application Screenshot" title="CRUD App Interface" style="width:800px;">

#### Request:
```json
{
    "name":"Gaurav Joshi",
    "phone":8556909577
}
```
#### Response:
```json
{
    "status": "Success",
    "data": {
        "phoneNumber": {
            "name": "Gaurav Joshi",
            "phone": 8556909577,
            "_id": "65e2f2f2fe8a6099f146573e",
            "__v": 0
        }
    }
}
```

### [READ](http://localhost:8080/get-phone)
![CRUD Application Screenshot](https://raw.githubusercontent.com/gauravrjoshi/mern-crud/main/img/read.png "CRUD App Interface")
#### Response:
```json
{
    "status": "Success",
    "data": {
        "phoneNumbers": [
            {
                "_id": "65e2eaaebf6adf60056cadd0",
                "name": "Gaurav Joshi",
                "phone": 8556909577,
                "__v": 0
            },
            {
                "_id": "65e2f2f2fe8a6099f146573e",
                "name": "Gaurav Joshi",
                "phone": 8556909577,
                "__v": 0
            }
        ]
    }
}
```

### [UPDATE](http://localhost:8080/update-phone/65e2eaaebf6adf60056cadd0)
![CRUD Application Screenshot](https://raw.githubusercontent.com/gauravrjoshi/mern-crud/main/img/update.png "CRUD App Interface")
#### Request
```json
{
    "name":"Latika Joshi",
    "phone":7087077998
}
```
#### Response
```json
{
    "status": "Success",
    "data": {
        "updatedPhone": {
            "_id": "65e2eaaebf6adf60056cadd0",
            "name": "Latika Joshi",
            "phone": 7087077998,
            "__v": 0
        }
    }
}
```
![CRUD Application Screenshot](https://raw.githubusercontent.com/gauravrjoshi/mern-crud/main/img/delete.png "CRUD App Interface")
### [DELETE](http://localhost:8080/delete-phone/65e2eaaebf6adf60056cadd0)
