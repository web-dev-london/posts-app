import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic';
import PostFormSkeleton from './loading';
import React from 'react';
import { Metadata } from 'next';


const PostForm = dynamic(
  () => import('@/app/posts/_components/PostForm'),
  {
    ssr: false,
    loading: () => <PostFormSkeleton />,
  }
)


interface EditPostPageProps {
  params: {
    id: string
  }
}

const EditPostPage = async ({ params: { id } }: EditPostPageProps) => {

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id)
    }
  })

  if (!post) {
    notFound()
  }

  return (
    <>
      <PostForm post={post} />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Posts App - Edit Post',
  description: 'Edit Post',
};

export default EditPostPage;

