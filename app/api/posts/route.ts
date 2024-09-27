import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod'

const postSchema = z.object({
  title: z.string().min(1, 'Title is required').max(255),
  description: z.string().min(1, 'Description is required').max(255)
})

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error.format() }, { status: 400 });
  }

  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      description: body.description
    }
  })

  return NextResponse.json(newPost, { status: 201 });
}