import prisma from '@/prisma/client';
import { Metadata } from 'next';
import PostAction from './PostAction';
import dynamic from 'next/dynamic';
import LoadingPostPage from './loading';
import React from 'react';


const PostsTable = dynamic(
  () => import('./PostsTable'),
  {
    ssr: false,
    loading: () => <LoadingPostPage />
  }
)

const PostsView = async () => {
  const posts = await prisma.post.findMany();

  return (
    <>
      <PostAction />
      <PostsTable
        posts={posts}
      />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Posts App - Posts List',
  description: 'View all project posts',
};

export default PostsView
