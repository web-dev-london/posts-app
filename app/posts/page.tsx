import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link'
import React from 'react'

const PostsView = () => {
  return (
    <>
      <Button
        colorScheme='yellow'
      >
        <Link
          _hover={{ textDecoration: 'none' }}
          as={NextLink} href='/posts/new'
        >
          New Post
        </Link>
      </Button>
    </>
  )
}

export default PostsView
