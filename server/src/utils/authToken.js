import dotenv from 'dotenv'
import jwt from "jsonwebtoken";
dotenv.config()

let secret = process.env.JWT_SECRET;
console.log(secret);


export const generateToken = (user) => {
    const payload = {
        _id: user._id,
        email: user.email
    };
    return jwt.sign(payload, secret, { expiresIn: '1d' })
}

export const verifyToken = (token) => {
    return jwt.verify(token, secret)
}