import prisma from '@/prisma/client'
import { Text } from '@chakra-ui/react'
import { notFound } from 'next/navigation'
import React from 'react'

interface PostDetailPageProps {
  params: {
    id: string
  }
}

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const postId = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })

  if (!postId)
    notFound()

  return (
    <>
      <Text>{postId.title}</Text>
      <Text>{postId.description}</Text>
      <Text>{postId.status}</Text>
      <Text>{postId.createdAt.toDateString()}</Text>
    </>
  )
}

export default PostDetailPage
