import express from "express";

import {
    publicBanners,
    adminBanners,
    getBanner,
    create,
    update,
    remove,
} from "../controllers/banner.controller.js";

const router = express.Router();

// Public
router.get("/", publicBanners);

// Admin CRUD
router.get("/admin", adminBanners);
router.get("/admin/:id", getBanner);
router.post("/admin", create);
router.put("/admin/:id", update);
router.delete("/admin/:id", remove);

export default router;