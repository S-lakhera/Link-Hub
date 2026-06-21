import { verifyToken } from "../utils/authToken.js";

const Protect = (req, res, next) => {
    try {
        let token = req.cookies.auth_Token;
        if(!token){
            throw new Error("User Unauthenticated")
        }

        let payload = verifyToken(token);
        
        req.user = payload
        

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
    next();
}

export default Protect;