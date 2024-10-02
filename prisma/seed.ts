import prisma from "./client";
import { posts } from "./posts";

async function seed() {
  console.log(`Start seeding ...`);
  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }
  console.log(`Seeding finished.`);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect()
})