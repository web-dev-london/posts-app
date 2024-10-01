import prisma from '@/prisma/client';
import { Metadata } from 'next';
import PostAction from './PostAction';
import dynamic from 'next/dynamic';
import LoadingPostPage from './loading';
import React from 'react';
import { Status } from '@prisma/client';


const PostsTable = dynamic(
  () => import('./PostsTable'),
  {
    ssr: false,
    loading: () => <LoadingPostPage />
  }
)

interface PostStatus {
  searchParams: {
    status: Status
  }
}

const PostsView = async ({ searchParams }: PostStatus) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status) ? searchParams.status : undefined

  const posts = await prisma.post.findMany({
    where: {
      status,
    },
    orderBy: {
      createdAt: 'asc'
    }
  });


  return (
    <>
      <PostAction />
      <PostsTable
        posts={posts}
        searchParams={searchParams}
      />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Posts App - Posts List',
  description: 'View all project posts',
};

export default PostsView
