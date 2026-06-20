import { validationResult } from "express-validator";

// Express validator gathers errors and validate middleware throws error to client
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        // Formats errors into a clean array of messages
        const errorMessages = errors.array().map(err => err.msg);
        return res.status(400).json({ errors: errorMessages });
    }
    
    next();
};