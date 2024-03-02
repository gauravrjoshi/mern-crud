# MERN-CRUD

## Backend

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
