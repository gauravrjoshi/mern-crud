import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import phonebook from "./routes/phonebook.js";
import authRoute from "./routes/AuthRoute.js"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use("/", phonebook);
app.use("/", authRoute);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

//Testing