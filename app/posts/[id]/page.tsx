import prisma from '@/prisma/client'
import { Text } from '@chakra-ui/react'
import { notFound } from 'next/navigation'

interface PostDetailPageProps {
  params: {
    id: string
  }
}

const PostDetailPage = async ({ params: { id } }: PostDetailPageProps) => {
  const postIdNumber = parseInt(id, 10)

  if (isNaN(postIdNumber)) {
    return notFound()
  }
  const postId = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (!postId) {
    return notFound()
  }

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
