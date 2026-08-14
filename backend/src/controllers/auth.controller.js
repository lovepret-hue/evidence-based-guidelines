import { loginSchema } from "../validators/auth.validator.js";
import { authenticateAdmin } from "../services/auth.service.js";

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

        // Prevent session fixation
        await new Promise((resolve, reject) => {
            req.session.regenerate((error) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve();
            });
        });

        req.session.user = admin;

        return res.status(200).json({
            success: true,
            message: "Login successful.",
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

export function logout(req, res) {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({
                success: false,
                message: "Unable to logout.",
            });
        }

        res.clearCookie("admin_session");

        return res.status(200).json({
            success: true,
            message: "Logout successful.",
        });
    });
}

export function me(req, res) {
    if (!req.session?.user) {
        return res.status(401).json({
            success: false,
            message: "Authentication required.",
        });
    }

    return res.status(200).json({
        success: true,
        user: req.session.user,
    });
}