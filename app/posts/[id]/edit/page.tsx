import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic';
import PostFormSkeleton from './loading';


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

export default EditPostPage;

