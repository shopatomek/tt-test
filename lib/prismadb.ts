import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if(process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

// zadeklarowany prisma jest globalnie dostępny dla wszystkich modułów
// w całym kodzie jest możliwość użycia prisma
