import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.ts";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "evidence_guidelines",
    connectionLimit: 5,
});

const prisma = new PrismaClient({
    adapter,
});

export default prisma;