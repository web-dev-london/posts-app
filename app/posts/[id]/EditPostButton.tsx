import { Button, Link } from '@chakra-ui/react'
import { BsPencilSquare } from 'react-icons/bs'

const EditPostButton = ({ id }: { id: number }) => {
  return (
    <>
      <Button
        colorScheme='yellow'
        display={'flex'}
        gap={2}
      >
        <BsPencilSquare />
        <Link
          href={`/posts/${id}/edit`}
        >
          Edit Post
        </Link>
      </Button>
    </>
  )
}

export default EditPostButton
