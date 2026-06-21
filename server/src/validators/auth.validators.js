import { body, param } from 'express-validator';

// 1. Validation Rules for Registration
export const registerValidationRules = [
    body('username')
        .trim()
        .notEmpty().withMessage('Username is required')
        .isAlphanumeric().withMessage('Username must contain only letters and numbers')
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