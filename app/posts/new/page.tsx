import dynamic from "next/dynamic"
import PostFormSkeleton from "./loading"
import React from "react"
import { Metadata } from "next"
// import { Spinner } from "@chakra-ui/react"

const PostForm = dynamic(
  () => import('@/app/posts/_components/PostForm'),
  {
    ssr: false,
    loading: () => <PostFormSkeleton />,
  }
)

const NewPostView = () => {
  return (
    <>
      <PostForm />
    </>
  )
}

export const metadata: Metadata = {
  title: 'Posts App - New Post',
  description: 'Create new post',
};

export default NewPostView
