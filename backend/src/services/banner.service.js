import prisma from "../config/prisma.js";

export async function getPublicBanners() {
    return prisma.banner.findMany({
        where: {
            isActive: true,
        },
        orderBy: [
            { sortOrder: "asc" },
            { id: "desc" },
        ],
    });
}

export async function getAllBanners() {
    return prisma.banner.findMany({
        orderBy: [
            { sortOrder: "asc" },
            { id: "desc" },
        ],
    });
}

export async function getBannerById(id) {
    return prisma.banner.findUnique({
        where: { id },
    });
}

export async function createBanner(data) {
    return prisma.banner.create({
        data,
    });
}

export async function updateBanner(id, data) {
    return prisma.banner.update({
        where: { id },
        data,
    });
}

export async function deleteBanner(id) {
    return prisma.banner.delete({
        where: { id },
    });
}