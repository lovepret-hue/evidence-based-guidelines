import express from "express";

import upload from "../middleware/upload.middleware.js";

import {
    getPublicWhatsNew,
    getWhatsNews,
    getWhatsNew,
    createWhatsNewItem,
    updateWhatsNewItem,
    deleteWhatsNewItem,
} from "../controllers/whatsNew.controller.js";


const router = express.Router();

router.get("/:id", getWhatsNew);
// Public
router.get("/public",getPublicWhatsNew);
// Get all
router.get("/",getWhatsNews);
// Get by ID
// router.get("/:id",getWhatsNew);


// Create
router.post("/",upload.single("file"),createWhatsNewItem);
// Update
router.put("/:id",upload.single("file"),updateWhatsNewItem);
// Delete
router.delete("/:id",deleteWhatsNewItem);
export default router;