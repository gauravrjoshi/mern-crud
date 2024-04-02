import swContact from "../Model/ContactModel.js"

export const Contact = async (req, res, next) => {
    const { email, name, message } = req.body;

    try {
        // Create a new instance of the Contact model
        const newContact = new swContact({
            name,
            email,
            message
        });

        // Save the new contact to the database
        const savedContact = await newContact.save();

        // Return the saved contact as JSON response
        res.json(savedContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to save contact" });
    }
};