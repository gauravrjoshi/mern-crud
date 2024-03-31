import swContact from "../Model/ContactModel.js"

export const Contact = async (req, res, next) => {
    const { email, name, message } = req.body;
    return res.json(req.body);

    /*  try {
         const { email, password, username, createdAt } = req.body;
         const existingUser = await User.findOne({ email });
         if (existingUser) {
             return res.json({ message: "User already exists" });
         }
         const user = await swContact.create({ email, password, username, createdAt });
         const token = createSecretToken(user._id);
         res.cookie("token", token, {
             withCredentials: true,
             httpOnly: false,
         });
         res
             .status(201)
             .json({ message: "User signed in successfully", success: true, user });
         next();
     } catch (error) {
         console.error(error);
     } */
};