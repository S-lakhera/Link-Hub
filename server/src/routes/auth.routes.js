import { Router } from 'express';
import { getMe, getPublicProfile, loginUser, logoutUser, registerUser } from '../controllers/User.controller.js';
import { loginValidationRules, publicProfileValidator, registerValidationRules } from '../validators/auth.validators.js';
import { validate } from '../middlewares/validate.middleware.js';
import Protect from '../middlewares/auth.middleware.js';

let router = Router()

router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Health route testing successful'
    })
})

router.post("/register", registerValidationRules, validate, registerUser)
router.post("/login", loginValidationRules, validate, loginUser)
router.post("/logout", Protect, logoutUser)
router.get("/me", Protect, getMe)
router.get("/profile/:username", publicProfileValidator, validate, getPublicProfile);

export default router;
