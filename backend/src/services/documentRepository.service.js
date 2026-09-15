import prisma from "../config/prisma.js";


// Get public What's New
export const getDocumentRepositoryService = async () => {
    return await prisma.documentRepository.findFirst({
         orderBy: {
            created_at: "desc",
        },
    });
};


export const createOrUpdateDocumentRepositoryService = async (data) => {
  const firstRecord = await prisma.documentRepository.findFirst({
    orderBy: {
      created_at: "desc",
    },
  });

  if (!firstRecord) {
    // No record → create
    return await prisma.documentRepository.create({
      data,
    });
  }

  // Record exists → update first/latest
  return await prisma.documentRepository.update({
    where: {
      id: firstRecord.id,
    },
    data,
  });
};