import prisma from '@/prisma/client';
import { Metadata } from 'next';
import PostAction from './PostAction';
import dynamic from 'next/dynamic';
import LoadingPostPage from './loading';
import React from 'react';
import { Post, Status } from '@prisma/client';
import { columns } from '@/helpers/links';
import Pagination from '@/components/Pagination';


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
    page: string
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

  const where = {
    status
  }

  const page = Number(searchParams.page) || 1;
  const pageSize = 10;

  const posts = await prisma.post.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  })

  const totalNumberOfPosts = await prisma.post.count({
    where
  })


  return (
    <>
      <PostAction />
      <PostsTable
        posts={posts}
        searchParams={searchParams}
      />
      <Pagination
        totalItems={totalNumberOfPosts}
        pageSize={pageSize}
        currentPage={page}
      />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Posts App - Posts List',
  description: 'View all project posts',
};

export default PostsView
