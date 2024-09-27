import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import postSchema from "@/schema/postSchema";

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