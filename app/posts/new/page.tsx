import dynamic from "next/dynamic"
import PostFormSkeleton from "./loading"
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

export default NewPostView
