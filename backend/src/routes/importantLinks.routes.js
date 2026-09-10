import express from "express";
import upload from "../middleware/upload.middleware.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

// import {
//     getImportantLinks,
//     getImportantLink,
//     createImportantLink,
//     updateImportantLink,
//     deleteImportantLink,
// } from "../controllers/importantLinks.controller.js";
import {
     getImportantLinks,
    createImportantLink,
    getImportantLinkById,
    deleteImportantLink,
    updateImportantLink
} from "../controllers/importantLinks.controller.js";


const router = express.Router();
// router.use(authenticateToken); // Middleware starts here

// // Get all
router.get("/",getImportantLinks);
router.get("/by-id/:id", getImportantLinkById);
router.delete("/delete/:id",deleteImportantLink);
router.put("/update/:id",updateImportantLink);


router.post("/",upload.single("file"),createImportantLink);
export default router;