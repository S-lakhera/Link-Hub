import { body, param } from "express-validator";

export const createLinkValidator = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ min: 2, max: 100 })
        .withMessage(
            "Title must be between 2 and 100 characters"
        ),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 300 })
        .withMessage(
            "Description cannot exceed 300 characters"
        ),

    body("url")
        .trim()
        .notEmpty()
        .withMessage("URL is required")
        .isURL()
        .withMessage("Please provide a valid URL"),
];

export const updateLinkValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid link id"),

    body("title")
        .optional()
        .trim()
        .isLength({ min: 2, max: 100 })
        .withMessage(
            "Title must be between 2 and 100 characters"
        ),

    body("description")
        .optional()
        .trim()
        .isLength({ max: 300 })
        .withMessage(
            "Description cannot exceed 300 characters"
        ),

    body("url")
        .optional()
        .isURL()
        .withMessage("Please provide a valid URL"),
];

export const getLinkByIdValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid link id"),
];

export const deleteLinkValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid link id"),
];

export const makeFeaturedLinkValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid link id"),
];

export const trackLinkClickValidator = [
    param("id")
        .isMongoId()
        .withMessage("Invalid link id"),
];