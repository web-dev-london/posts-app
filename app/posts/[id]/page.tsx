import prisma from '@/prisma/client';
import {
  Box,
  Grid
} from '@chakra-ui/react';
import { notFound } from 'next/navigation';
import EditPostButton from './EditPostButton';
import PostDetails from './PostDetails';

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
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (!post) {
    return notFound()
  }

  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 2, md: 8 }}
      >
        <Box>
          <PostDetails
            post={post}
          />
        </Box>
        <Box>
          <EditPostButton
            id={post.id}
          />
        </Box>
      </Grid>
    </>
  )
}

export default PostDetailPage
