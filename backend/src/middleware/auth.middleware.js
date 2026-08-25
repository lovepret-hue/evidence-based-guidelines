import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

export async function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader?.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authentication token is required.",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Check whether token was revoked
        const revokedToken = await prisma.revokedToken.findUnique({
            where: {
                jti: decoded.jti,
            },
        });

        if (revokedToken) {
            return res.status(401).json({
                success: false,
                message: "Token has been invalid. Please login again.",
            });
        }

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });
    }
}