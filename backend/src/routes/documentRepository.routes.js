import express from "express";
import upload from "../middleware/upload.middleware.js";
import { updateDocumentRepositoryItem } from "../controllers/documentRepository.controller.js";

const router = express.Router();

// Update
router.put("/",upload.single("file"),updateDocumentRepositoryItem);
export default router;