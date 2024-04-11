import { PrismaClient } from '@prisma/client'

import { singleton } from './singleton.server'

// Hard-code a unique key, so we can look up the client when this module gets re-imported
let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  prisma = singleton('prisma', () => new PrismaClient())
}

prisma.$connect()

export { prisma }
