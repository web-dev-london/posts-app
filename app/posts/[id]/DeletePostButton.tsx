import { Button } from '@chakra-ui/react'
// import Link from 'next/link'
import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const DeletePostButton = ({ id }: { id: number }) => {
  return (
    <>
      <Button
        colorScheme='red'
        display={'flex'}
        gap={2}
      >
        <FaDeleteLeft />
        {/* <Link
          href={`/posts/${id}/edit`}
        > */}
        Delete Post
        {/* </Link> */}
      </Button>

    </>
  )
}

export default DeletePostButton
