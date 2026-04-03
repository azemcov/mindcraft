import 'dotenv/config';
import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient({
  accelerateUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate());

async function main() {
  const user = await prisma.user.create({
    data: {
      username: 'test_user',
      email: 'test@test.com',
      passwordHash: 'hash123',
    },
  });
  console.log('Создан пользователь:', user);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
