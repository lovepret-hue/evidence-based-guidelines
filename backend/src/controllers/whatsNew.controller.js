import {
    getPublicWhatsNews,
    getAllWhatsNews,
    getWhatsNewById,
    createWhatsNew,
    updateWhatsNew,
    deleteWhatsNew,
} from "../services/whatsNew.service.js";


// Get public What's New
export const getPublicWhatsNew = async (req, res) => {
    try {
        const data = await getPublicWhatsNews();

        return res.status(200).json({
            success: true,
            data,
        });

    } catch (error) {
        console.error("Get Public What's New Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch What's New",
        });
    }
};


// Get all What's New
export const getWhatsNews = async (req, res) => {
    try {
        const data = await getAllWhatsNews();

        return res.status(200).json({
            success: true,
            data,
        });

    } catch (error) {
        console.error("Get What's New Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch What's New",
        });
    }
};


// Get What's New by ID
export const getWhatsNew = async (req, res) => {
    try {
        const data = await getWhatsNewById(req.params.id);

        if (!data) {
            return res.status(404).json({
                success: false,
                message: "What's New not found",
            });
        }

        return res.status(200).json({
            success: true,
            data,
        });

    } catch (error) {
        console.error("Get What's New By ID Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch What's New",
        });
    }
};


// Create What's New
export const createWhatsNewItem = async (req, res) => {
    try {
        const {
            title,
            type,
            external_link,
            status,
        } = req.body;


        // Validate title
        if (!title || title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Title is required",
            });
        }


        // Validate type
        if (!["pdf", "external_link"].includes(type)) {
            return res.status(400).json({
                success: false,
                message: "Type must be pdf or external_link",
            });
        }


        // PDF
        if (type === "pdf" && !req.file) {
            return res.status(400).json({
                success: false,
                message: "PDF file is required",
            });
        }


        // External link
        if (
            type === "external_link" &&
            (!external_link || external_link.trim() === "")
        ) {
            return res.status(400).json({
                success: false,
                message: "External link is required",
            });
        }


        const data = {
            title: title.trim(),

            type,

            file_path: req.file
                ? `/uploads/whats-new/${req.file.filename}`
                : null,

            external_link:
                type === "external_link"
                    ? external_link.trim()
                    : null,

            status:
                status === undefined
                    ? true
                    : status === "true" || status === true,
        };


        const result = await createWhatsNew(data);


       

        const fileUrl = result.file_path
    ? `${process.env.APP_URL}${result.file_path}`
    : null;

return res.status(201).json({
    success: true,
    message: "What's New created successfully",
    data: {
        ...result,
        file_url: fileUrl,
    },
});

    } catch (error) {
        console.error("Create What's New Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to create What's New",
        });
    }
};


// Update What's New
export const updateWhatsNewItem = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const existing = await getWhatsNewById(id);

        if (!existing) {
            return res.status(404).json({
                success: false,
                message: "What's New not found",
            });
        }


        const {
            title,
            type,
            external_link,
            status,
        } = req.body;


        if (!title || title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Title is required",
            });
        }


        if (!["pdf", "external_link"].includes(type)) {
            return res.status(400).json({
                success: false,
                message: "Type must be pdf or external_link",
            });
        }


        if (
            type === "pdf" &&
            !req.file &&
            !existing.file_path
        ) {
            return res.status(400).json({
                success: false,
                message: "PDF file is required",
            });
        }


        if (
            type === "external_link" &&
            (!external_link || external_link.trim() === "")
        ) {
            return res.status(400).json({
                success: false,
                message: "External link is required",
            });
        }


        const data = {
            title: title.trim(),

            type,

            file_path:
                type === "pdf"
                    ? req.file
                        ? `/uploads/whats-new/${req.file.filename}`
                        : existing.file_path
                    : null,

            external_link:
                type === "external_link"
                    ? external_link.trim()
                    : null,

            status:
                status === undefined
                    ? existing.status
                    : status === "true" || status === true,
        };


        const result = await updateWhatsNew(id, data);


        return res.status(200).json({
            success: true,
            message: "What's New updated successfully",
            data: result,
        });

    } catch (error) {
        console.error("Update What's New Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to update What's New",
        });
    }
};


// Delete What's New
export const deleteWhatsNewItem = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const existing = await getWhatsNewById(id);

        if (!existing) {
            return res.status(404).json({
                success: false,
                message: "What's New not found",
            });
        }


        await deleteWhatsNew(id);


        return res.status(200).json({
            success: true,
            message: "What's New deleted successfully",
        });

    } catch (error) {
        console.error("Delete What's New Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to delete What's New",
        });
    }
};