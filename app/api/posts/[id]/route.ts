import prisma from "@/prisma/client";
import postSchema from "@/schema/postSchema";
import { NextResponse, NextRequest } from "next/server";


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const body = await request.json();
  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error.format() }, { status: 400 });
  }

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const updatedPost = await prisma.post.update({
    where: {
      id: parseInt(params.id)
    },
    data: {
      title: body.title,
      description: body.description
    }
  })

  return NextResponse.json(updatedPost, { status: 200 });
};



export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  await prisma.post.delete({
    where: {
      id: parseInt(params.id)
    }
  })

  return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
}