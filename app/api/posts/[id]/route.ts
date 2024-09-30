import authOptions from "@/app/auth/authOptions";
import prisma from "@/prisma/client";
import { patchPostSchema } from "@/schema/schemaView";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const validation = patchPostSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error.format() }, { status: 400 });
  }

  const { assignedToUserId, title, description } = body
  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: {
        id: assignedToUserId
      }
    })

    if (!user) {
      return NextResponse.json({ error: "Assignee not found" }, { status: 400 });
    }
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
      title,
      description,
      assignedToUserId,
    }
  })

  return NextResponse.json(updatedPost, { status: 200 });
};



export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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