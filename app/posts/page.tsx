import StatusBadge from '@/components/StatusBadge';
import prisma from '@/prisma/client';
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import delay from 'delay';
import PostAction from './PostAction';

const PostsView = async () => {
  const posts = await prisma.post.findMany();

  await delay(2000)

  return (
    <>
      <PostAction />


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
                    _hover={{ textDecoration: 'none' }}
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

export default PostsView
