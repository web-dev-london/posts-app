import { Button, Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import PostStatusFilter from './PostStatusFilter'
import React from 'react'

const PostAction = () => {
  return (
    <>
      <Flex
        my={5}
        justifyContent={'space-between'}
      >
        <PostStatusFilter />
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
      </Flex>
    </>
  )
}

export default PostAction
