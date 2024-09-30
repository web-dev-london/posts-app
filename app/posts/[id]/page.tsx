import prisma from '@/prisma/client';
import {
  Box,
  Flex,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { notFound } from 'next/navigation';
import EditPostButton from './EditPostButton';
import dynamic from 'next/dynamic';
import LoadingPostDetailPage from './loading';
import DeletePostButton from './DeletePostButton';
import React from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/auth/authOptions';
import AssigneeSelect from './AssigneeSelect';

const PostDetails = dynamic(
  () => import('./PostDetails'),
  {
    ssr: false,
    loading: () => <LoadingPostDetailPage />
  }
)

interface PostDetailPageProps {
  params: {
    id: string
  }
}

const PostDetailPage = async ({ params: { id } }: PostDetailPageProps) => {
  const session = await getServerSession(authOptions)
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
        templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
        gap={{ base: 2, md: 8 }}
      >
        <GridItem
          colSpan={{ base: 1, md: 4 }}
        >
          <Box>
            <PostDetails
              post={post}
            />
          </Box>
        </GridItem>
        <GridItem>
          {session && (
            <Box>
              <Flex
                flexDir={'column'}
                gap={5}
              >
                <AssigneeSelect />
                <EditPostButton
                  id={post.id}
                />
                <DeletePostButton
                  id={post.id}
                />
              </Flex>
            </Box>
          )}
        </GridItem>
      </Grid>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Posts App - Post Details',
  description: 'View Post Details',
};

export default PostDetailPage
