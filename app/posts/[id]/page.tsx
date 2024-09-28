import { StatusBadge } from '@/components'
import prisma from '@/prisma/client'
import {
  Card,
  CardBody,
  Flex,
  Heading,
  Text
} from '@chakra-ui/react'
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
      <Heading>{postId.title}</Heading>
      <Flex
        gap={5}
        my={2}
      >
        <StatusBadge status={postId.status} />
        <Text>{postId.createdAt.toDateString()}</Text>
      </Flex>
      <Card
        maxW={'md'}
        my={5}
      >
        <CardBody>
          {postId.description}
        </CardBody>
      </Card>
    </>
  )
}

export default PostDetailPage
