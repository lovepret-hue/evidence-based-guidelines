import express from "express";
import upload from "../middleware/upload.middleware.js";
import { createDocumentRepositoryItem } from "../controllers/documentRepository.controller.js";

const router = express.Router();

// Create
router.post("/",upload.single("file"),createDocumentRepositoryItem);
export default router;