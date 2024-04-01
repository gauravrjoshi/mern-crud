import express from "express";
import { Signup, Login, userVerification } from "../Controllers/AuthController.js"

const authRoute = express.Router();

authRoute.post("/signup", Signup);
authRoute.post('/login', Login)
authRoute.post('/', userVerification)

export default authRoute;