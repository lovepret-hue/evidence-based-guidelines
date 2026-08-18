import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import pinoHttp from "pino-http";
import authRoutes from "./routes/auth.routes.js";
import session from "express-session";
import bannerRoutes from "./routes/banner.routes.js";

const app = express();

app.disable("x-powered-by");

/*
|--------------------------------------------------------------------------
| Security Headers
|--------------------------------------------------------------------------
*/

app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

/*
|--------------------------------------------------------------------------
| CORS
|--------------------------------------------------------------------------
*/

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

/*
|--------------------------------------------------------------------------
| Rate Limiting
|--------------------------------------------------------------------------
*/

app.use(
    rateLimit({
        windowMs: 15 * 60 * 1000,
        limit: 100,
        standardHeaders: true,
        legacyHeaders: false,
    })
);

/*
|--------------------------------------------------------------------------
| Request Body
|--------------------------------------------------------------------------
*/

app.use(
    express.json({
        limit: "1mb",
    })
);

app.use(
    express.urlencoded({
        extended: false,
        limit: "1mb",
    })
);

app.use(
    session({
        name: "admin_session",

        secret: process.env.SESSION_SECRET,

        resave: false,

        saveUninitialized: false,

        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 2,
        },
    })
);

/*
|--------------------------------------------------------------------------
| Cookies
|--------------------------------------------------------------------------
*/

app.use(cookieParser());

/*
|--------------------------------------------------------------------------
| HTTP Logger
|--------------------------------------------------------------------------
*/

app.use(pinoHttp());

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Evidence Based Guidelines API is running",
    });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/banners", bannerRoutes);

/*
|--------------------------------------------------------------------------
| Authentication Routes
|--------------------------------------------------------------------------
*/

// Add after auth.routes.js is ready:
// import authRoutes from "./routes/auth.routes.js";
// app.use("/api/v1/auth", authRoutes);

export default app;