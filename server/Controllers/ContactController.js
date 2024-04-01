import swContact from "../Model/ContactModel.js"

export const Contact = async (req, res, next) => {
    const { email, name, message } = req.body;
    // return res.json(req.body);

    try {
        const { name, email, message } = req.body;
        const existingUser = await swContact.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        res.status(201).json({ message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
        console.error(error);
    }
};