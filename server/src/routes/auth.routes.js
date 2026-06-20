import { Router } from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/User.controller.js';
import { loginValidationRules, registerValidationRules } from '../validators/auth.validators.js';
import { validate } from '../middlewares/validate.middleware.js';

let router = Router()

router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Health route testing successful'
    })
})

router.post("/register", registerValidationRules, validate, registerUser)
router.post("/login", loginValidationRules, validate, loginUser)
router.post("/logout",logoutUser)

export default router;
