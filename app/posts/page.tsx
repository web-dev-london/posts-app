import StatusBadge from '@/components/StatusBadge';
import prisma from '@/prisma/client';
import { Box, Button, Link, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import NextLink from 'next/link'
import React from 'react'

const PostsView = async () => {
  const posts = await prisma.post.findMany();
  return (
    <>
      <Box>
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
      </Box>


      <TableContainer
        borderRadius={'10px'}
        my={5}
      >
        <Table variant='simple'>
          <Thead bg={'gray.100'}>
            <Tr>
              <Th>Post</Th>
              <Th
                display={{ base: 'none', md: 'table-cell' }}
              >
                Status
              </Th>
              <Th
                display={{ base: 'none', md: 'table-cell' }}
                isNumeric
              >
                Created
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.map((post) => (
              <Tr key={post.id}>
                <Td
                >
                  {post.title}
                  <Box
                    display={{ base: 'block', md: 'none' }}
                    mt={3}
                  >
                    <StatusBadge status={post.status} />
                  </Box>
                </Td>
                <Td
                  display={{ base: 'none', md: 'table-cell' }}
                >
                  <StatusBadge status={post.status} />
                </Td>
                <Td
                  isNumeric
                  display={{ base: 'none', md: 'table-cell' }}
                >
                  {post.createdAt.toDateString()}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default PostsView
