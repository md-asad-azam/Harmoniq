import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient()

// directly exporting it, will it create multiple instance of this client? IDK
// but creating a singleton of this is what's recommended.