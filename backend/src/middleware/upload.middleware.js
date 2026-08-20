import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(
    process.cwd(),
    "uploads",
    "whats-new"
);

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {
        recursive: true,
    });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },

    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname).toLowerCase();

        const filename =
            `${Date.now()}-${Math.round(Math.random() * 1e9)}${extension}`;

        cb(null, filename);
    },
});

const fileFilter = (req, file, cb) => {

    const extension =
        path.extname(file.originalname).toLowerCase();

    if (
        extension === ".pdf" &&
        (
            file.mimetype === "application/pdf" ||
            file.mimetype === "application/octet-stream"
        )
    ) {
        cb(null, true);
    } else {
        cb(new Error("Only PDF files are allowed"), false);
    }
};

const upload = multer({
    storage,

    fileFilter,

    limits: {
        fileSize: 50 * 1024 * 1024,
    },
});

export default upload;