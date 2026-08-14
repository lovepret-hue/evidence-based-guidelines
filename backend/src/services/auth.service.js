import prisma from "../config/prisma.js";
import { verifyPassword } from "../utils/password.js";

export async function authenticateAdmin(username, password) {
    const user = await prisma.user.findUnique({
        where: {
            username,
        },
    });

    if (!user || !user.isActive || user.role !== "ADMIN") {
        return null;
    }

    if (
        user.lockedUntil &&
        user.lockedUntil > new Date()
    ) {
        return null;
    }

    const validPassword = await verifyPassword(
        user.passwordHash,
        password
    );

    if (!validPassword) {
        return null;
    }

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            failedLoginAttempts: 0,
            lockedUntil: null,
            lastLoginAt: new Date(),
        },
    });

    return {
        id: user.id,
        username: user.username,
        role: user.role,
    };
}