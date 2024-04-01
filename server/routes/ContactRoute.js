import express from "express";
import { Contact } from "../Controllers/ContactController.js";

const contactRoute = express.Router();

contactRoute.post("/contact", Contact);

export default contactRoute;