import prisma from '@/prisma/client';
import { Metadata } from 'next';
import PostAction from './PostAction';
import dynamic from 'next/dynamic';
import LoadingPostPage from './loading';
import React from 'react';
import { Post, Status } from '@prisma/client';
import { columns } from '@/helpers/links';


const PostsTable = dynamic(
  () => import('./PostsTable'),
  {
    ssr: false,
    loading: () => <LoadingPostPage />
  }
)

interface PostStatus {
  searchParams: {
    orderBy: keyof Post
    status: Status
  }
}

const PostsView = async ({ searchParams }: PostStatus) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined
  const orderBy = columns.map(column => column.value).includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: 'asc' }
    : undefined

  const posts = await prisma.post.findMany({
    where: {
      status,
    },
    orderBy,
  })


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
