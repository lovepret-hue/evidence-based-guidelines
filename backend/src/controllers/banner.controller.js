import {
    getPublicBanners,
    getAllBanners,
    getBannerById,
    createBanner,
    updateBanner,
    deleteBanner,
} from "../services/banner.service.js";

export async function publicBanners(req, res) {
    try {
        const banners = await getPublicBanners();

        return res.status(200).json({
            success: true,
            data: banners,
        });
    } catch (error) {
        console.error("BANNER FETCH ERROR:");
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch banners.",
        });
    }
}

export async function adminBanners(req, res) {
    try {
        const banners = await getAllBanners();

        res.json({
            success: true,
            data: banners,
        });
    } catch (error) {
        req.log?.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch banners.",
        });
    }
}

export async function getBanner(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid banner ID.",
            });
        }

        const banner = await getBannerById(id);

        if (!banner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found.",
            });
        }

        res.json({
            success: true,
            data: banner,
        });
    } catch (error) {
        req.log?.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to fetch banner.",
        });
    }
}

export async function create(req, res) {
    try {
        const {
            title,
            image,
            link,
            sortOrder,
            isActive,
        } = req.body;

        if (!title || !image) {
            return res.status(400).json({
                success: false,
                message: "Title and image are required.",
            });
        }

        const banner = await createBanner({
            title: title.trim(),
            image: image.trim(),
            link: link?.trim() || null,
            sortOrder: Number(sortOrder) || 0,
            isActive: isActive !== false,
        });

        res.status(201).json({
            success: true,
            message: "Banner created successfully.",
            data: banner,
        });
    } catch (error) {
        req.log?.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to create banner.",
        });
    }
}

export async function update(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid banner ID.",
            });
        }

        const existingBanner = await getBannerById(id);

        if (!existingBanner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found.",
            });
        }

        const {
            title,
            image,
            link,
            sortOrder,
            isActive,
        } = req.body;

        const banner = await updateBanner(id, {
            title: title?.trim() ?? existingBanner.title,
            image: image?.trim() ?? existingBanner.image,
            link: link?.trim() ?? existingBanner.link,
            sortOrder:
                sortOrder !== undefined
                    ? Number(sortOrder)
                    : existingBanner.sortOrder,
            isActive:
                isActive !== undefined
                    ? Boolean(isActive)
                    : existingBanner.isActive,
        });

        res.json({
            success: true,
            message: "Banner updated successfully.",
            data: banner,
        });
    } catch (error) {
        req.log?.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to update banner.",
        });
    }
}

export async function remove(req, res) {
    try {
        const id = Number(req.params.id);

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                success: false,
                message: "Invalid banner ID.",
            });
        }

        const existingBanner = await getBannerById(id);

        if (!existingBanner) {
            return res.status(404).json({
                success: false,
                message: "Banner not found.",
            });
        }

        await deleteBanner(id);

        res.json({
            success: true,
            message: "Banner deleted successfully.",
        });
    } catch (error) {
        req.log?.error(error);

        res.status(500).json({
            success: false,
            message: "Unable to delete banner.",
        });
    }
}