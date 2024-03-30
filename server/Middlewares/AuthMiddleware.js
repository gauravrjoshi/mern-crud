import User from "../Model/UserModel.js"
import jwt from "jsonwebtoken";

export const userVerification = (req, res) => {


    const cookieString = req.headers.cookie;

    // Split the cookie string by ';' to separate individual cookies (if any)
    const cookies = cookieString.split(';');

    // Find the cookie that starts with 'token='
    let token = null;
    cookies.forEach(cookie => {
        if (cookie.trim().startsWith('token=')) {
            token = cookie.trim().substring(6);
        }
    });


    if (!token) {
        return res.json({ status: false })
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            const user = await User.findById(data.id)
            if (user) return res.json({ status: true, user: user.username })
            else return res.json({ status: false })
        }
    })
}