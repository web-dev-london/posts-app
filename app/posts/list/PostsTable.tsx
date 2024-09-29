import { StatusBadge } from '@/components'
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Link
} from '@chakra-ui/react'
import { Post } from '@prisma/client'
import NextLink from 'next/link'
import React from 'react'

interface PostsTableProps {
  posts: Post[]
}

const PostsTable = ({ posts }: PostsTableProps) => {
  return (
    <>
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
                  <Link
                    as={NextLink}
                    href={`/posts/${post.id}`}
                  >
                    {post.title}
                  </Link>
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

export default PostsTable
