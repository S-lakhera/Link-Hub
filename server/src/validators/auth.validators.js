import { body, param } from 'express-validator';

// 1. Validation Rules for Registration
export const registerValidationRules = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isLength({ min: 3, max: 30 }).withMessage('Username must be between 3 and 30 characters')
        .toLowerCase(),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(), // Sanitizes email (e.g., lowercase, removes dots in gmail if applicable)

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

// 2. Validation Rules for Login
export const loginValidationRules = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address')
        .normalizeEmail(),

    body('password')
        .trim()
        .notEmpty().withMessage('Password is required')
];

export const publicProfileValidator = [
    param("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 3, max: 30 })
        .withMessage(
            "Username must be between 3 and 30 characters"
        ),
];

export const updateProfileValidator = [
    body("avatar")
        .optional()
        .trim()
        .isURL()
        .withMessage("Avatar must be a valid URL"),

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 2, max: 50 })
        .withMessage(
            "Name must be between 2 and 50 characters"
        ),

    body("username")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .withMessage(
            "Username must contain only letters and numbers"
        )
        .isLength({ min: 3, max: 30 })
        .withMessage(
            "Username must be between 3 and 30 characters"
        )
        .toLowerCase(),

    body("bio")
        .optional()
        .trim()
        .isLength({ max: 250 })
        .withMessage(
            "Bio cannot exceed 250 characters"
        ),

    body("socials.github")
        .optional()
        .trim()
        .isURL()
        .withMessage(
            "GitHub must be a valid URL"
        ),

    body("socials.linkedin")
        .optional()
        .trim()
        .isURL()
        .withMessage(
            "LinkedIn must be a valid URL"
        ),

    body("socials.youtube")
        .optional()
        .trim()
        .isURL()
        .withMessage(
            "YouTube must be a valid URL"
        ),

    body("socials.instagram")
        .optional()
        .trim()
        .isURL()
        .withMessage(
            "Instagram must be a valid URL"
        ),

    body("socials.twitter")
        .optional()
        .trim()
        .isURL()
        .withMessage(
            "Twitter must be a valid URL"
        ),

    body("email")
        .not()
        .exists()
        .withMessage(
            "Email cannot be updated from this route"
        ),

    body("password")
        .not()
        .exists()
        .withMessage(
            "Password cannot be updated from this route"
        ),

    body("isDeleted")
        .not()
        .exists()
        .withMessage(
            "isDeleted cannot be updated"
        ),
];