import prisma from "../src/config/prisma.js";
import { hashPassword } from "../src/utils/password.js";

async function main() {
    const username = "admin";

    const password = process.env.ADMIN_INITIAL_PASSWORD;

    if (!password) {
        throw new Error(
            "ADMIN_INITIAL_PASSWORD is missing from .env"
        );
    }

    const existingAdmin = await prisma.user.findUnique({
        where: {
            username,
        },
    });

    if (existingAdmin) {
        console.log("Admin already exists.");
        return;
    }

    const passwordHash = await hashPassword(password);

    await prisma.user.create({
        data: {
            username,
            passwordHash,
            role: "ADMIN",
            isActive: true,
        },
    });

    console.log("Admin account created successfully.");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });