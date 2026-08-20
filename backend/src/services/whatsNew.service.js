import prisma from "../config/prisma.js";


// Get public What's New
export const getPublicWhatsNews = async () => {
    return await prisma.whatsNew.findMany({
        where: {
            status: true,
        },
        orderBy: {
            created_at: "desc",
        },
    });
};


// Get all What's New
export const getAllWhatsNews = async () => {
    return await prisma.whatsNew.findMany({
        orderBy: {
            created_at: "desc",
        },
    });
};


// Get What's New by ID
export const getWhatsNewById = async (id) => {
    return await prisma.whatsNew.findUnique({
        where: {
            id: Number(id),
        },
    });
};


// Create What's New
export const createWhatsNew = async (data) => {
    return await prisma.whatsNew.create({
        data,
    });
};


// Update What's New
export const updateWhatsNew = async (id, data) => {
    return await prisma.whatsNew.update({
        where: {
            id: Number(id),
        },
        data,
    });
};


// Delete What's New
export const deleteWhatsNew = async (id) => {
    return await prisma.whatsNew.delete({
        where: {
            id: Number(id),
        },
    });
};