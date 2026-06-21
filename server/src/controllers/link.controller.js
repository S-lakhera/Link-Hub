import LinkDAO from "../daos/link.daos.js";

export const createLink = async (req, res) => {
    try {
        const link = await LinkDAO.create({
            ...req.body,
            userId: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: "Link created successfully",
            link,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getMyLinks = async (req, res) => {
    try {
        const links = await LinkDAO.findByUserId(req.user._id);

        res.status(200).json({
            success: true,
            count: links.length,
            links,
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getLinkById = async (req, res) => {
    try {
        const { id } = req.params;

        const link = await LinkDAO.findById(id);

        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
            });
        }

        res.status(200).json({
            success: true,
            link,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateLink = async (req, res) => {
    try {
        const { id } = req.params;

        const link = await LinkDAO.findById(id);

        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
            });
        }

        if (link.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this link",
            });
        }

        const updatedLink = await LinkDAO.updateById(id, req.body);



        res.status(200).json({
            success: true,
            message: "Link updated successfully",
            link: updatedLink,
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const makeFeaturedLink = async (req, res) => {
    try {
        const { id } = req.params;

        const link = await LinkDAO.makeFeatured(
            id,
            req.user._id
        );

        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Featured link updated successfully",
            link,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteLink = async (req, res) => {
    try {
        const { id } = req.params;
        

        const link = await LinkDAO.softDelete(id, req.user._id);

        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Link deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const trackLinkClick = async (req, res) => {
    try {
        const { id } = req.params;

        const link = await LinkDAO.incrementClicks(id);

        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link not found",
            });
        }

        res.status(200).json({
            success: true,
            clicks: link.clicks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};