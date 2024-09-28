import { StatusBadge } from '@/components';
import prisma from '@/prisma/client';
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  Heading,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsPencilSquare } from "react-icons/bs";

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
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 2, md: 8 }}
      >
        <Box>
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
        </Box>
        <Box>
          <Button
            colorScheme='yellow'
            display={'flex'}
            gap={2}
          >
            <BsPencilSquare />
            <Link
              href={`/posts/${id}/edit`}
            >
              Edit Post
            </Link>
          </Button>
        </Box>
      </Grid>
    </>
  )
}

export default PostDetailPage
