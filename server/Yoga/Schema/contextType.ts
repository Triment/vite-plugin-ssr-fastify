import { PrismaClient } from "@prisma/client"
import { pubSub } from "."

export type ContextDef = {
  prisma: PrismaClient,
  pubSub: typeof pubSub
}