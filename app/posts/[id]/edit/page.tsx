import prisma from '@/prisma/client'
import PostForm from '../../_components/PostForm'
import { notFound } from 'next/navigation'


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

export default EditPostPage;

