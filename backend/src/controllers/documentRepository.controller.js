import {
    getDocumentRepositoryService,
    createOrUpdateDocumentRepositoryService
} from "../services/documentRepository.service.js";



// Get public Document Repository
export const getDocumentRepository = async (req, res) => {
    try {
        const data = await getDocumentRepositoryService();

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





// Get What's New by ID



// Create What's New
export const createDocumentRepositoryItem = async (req, res) => {
    try {
        const {   title, document_date } = req.body;

        // Validate title
        if (!title || title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Title is required",
            });
        }

            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, "0");
            const englishPdf = req.files?.english_pdf?.[0] || null;
            const hindiPdf = req.files?.hindi_pdf?.[0] || null;
          

        const data = {
            title: title.trim(),
            document_date: document_date ? new Date(document_date) : null,
            english_pdf: englishPdf ? `/uploads/document-repository/${year}/${month}/${englishPdf.filename}` : null,
            hindi_pdf: hindiPdf ? `/uploads/document-repository/${year}/${month}/${hindiPdf.filename}` : null,
        };

        const result = await createOrUpdateDocumentRepositoryService(data);
       const english_url=  englishPdf ? `/uploads/document-repository/${year}/${month}/${englishPdf.filename}` : null;
       const hindi_url= hindiPdf ? `/uploads/document-repository/${year}/${month}/${hindiPdf.filename}` : null;

return res.status(201).json({
    success: true,
    message: "What's New created successfully",
    data: {
        ...result,
        english_url,
        hindi_url,
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