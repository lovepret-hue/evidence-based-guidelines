import prisma from "../config/prisma.js";
import { notFound } from "../utils/errors.js";


// Get public What's New
export const getImportantLinkService = async () => {
    
    return await prisma.importantLink.findMany({
        where:{
            status:true,
        },
        orderBy:{
            created_at:"desc",
        },
    });
};


// Get all Important Links
export const getAllImportantLinks = async () => {
    return await prisma.importantLink.findMany({
        orderBy: {
            created_at: "desc",
        },
    });
};


// Get What's New by ID
export const getImportantLinkByIdService = async (id) => {
    return await prisma.importantLink.findUnique({
        where: {
            id: Number(id),
        },
    });
};


// Create Important Link

export async function createImportantLinkService(data) {
    return prisma.importantLink.create({
        data,
    });
}


// Update Important Link
export const updateImportantLink = async (id, data) => {
    return await prisma.importantLink.update({
        where: {
            id: Number(id),
        },
        data,
    });
};


// Delete Important Link
export const deleteImportantLinkService = async (id) => {
    const existingLink = await getImportantLinkByIdService(id);
      if (!existingLink) {
            throw notFound();
    }
    

    return await prisma.importantLink.delete({
        where: {
            id: Number(id),
        },
    });
};

export const updateImportantLinkService = async (id, data) => {

     const existingLink = await getImportantLinkByIdService(id);
      if (!existingLink) {
            throw notFound();
    }
    console.log("Updating Important Link with ID:", id, "Data:", data);
     return prisma.importantLink.update({
        where: { id },
        data,
    });

};

