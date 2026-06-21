import { Router } from "express";

import Protect from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";

import {
    createLink,
    getMyLinks,
    getLinkById,
    updateLink,
    makeFeaturedLink,
    deleteLink,
    trackLinkClick,
} from "../controllers/link.controller.js";

import {
    createLinkValidator,
    updateLinkValidator,
    getLinkByIdValidator,
    deleteLinkValidator,
    makeFeaturedLinkValidator,
    trackLinkClickValidator,
} from "../validators/link.validator.js";

const router = Router();

router.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Link routes working successfully",
    });
});

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.post(
    "/",
    Protect,
    createLinkValidator,
    validate,
    createLink
);

router.get(
    "/",
    Protect,
    getMyLinks
);

router.get(
    "/:id",
    Protect,
    getLinkByIdValidator,
    validate,
    getLinkById
);

router.patch(
    "/:id",
    Protect,
    updateLinkValidator,
    validate,
    updateLink
);

router.patch(
    "/:id/feature",
    Protect,
    makeFeaturedLinkValidator,
    validate,
    makeFeaturedLink
);

router.delete(
    "/:id",
    Protect,
    deleteLinkValidator,
    validate,
    deleteLink
);

/*
|--------------------------------------------------------------------------
| Public Route
|--------------------------------------------------------------------------
*/

router.patch(
    "/:id/click",
    trackLinkClickValidator,
    validate,
    trackLinkClick
);

export default router;