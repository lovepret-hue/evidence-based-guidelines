import { loginSchema } from "../validators/auth.validator.js";
import { authenticateAdmin } from "../services/auth.service.js";
import prisma from "../config/prisma.js";
import jwt from "jsonwebtoken";
const jti = crypto.randomUUID();



export async function login(req, res) {
    try {
        const result = loginSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "Invalid login details.",
            });
        }

        const { username, password } = result.data;

        const admin = await authenticateAdmin(
            username,
            password
        );

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password.",
            });
        }

        // Generate JWT token
        const token = jwt.sign(
            {
                id: admin.id,
                username: admin.username,
                      jti,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN || "1d",
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            user: admin,
        });

    } catch (error) {
        req.log?.error(error);

        return res.status(500).json({
            success: false,
            message: "Unable to process login.",
        });
    }
}

export async function logout(req, res) {
    // try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is required.",
            });
        }

        const decoded = req.user;

        await prisma.RevokedToken.create({
            data: {
                jti: decoded.jti,
                expiresAt: new Date(decoded.exp * 1000),
            },
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful.",
        });

    // } catch (error) {
    //     req.log?.error(error);

    //     return res.status(500).json({
    //         success: false,
    //         message: "Unable to process logout.",
    //     });
    // }
}

export function me(req, res) {

    return res.status(200).json({
        success: true,
        user: req.session.user,
    });
}