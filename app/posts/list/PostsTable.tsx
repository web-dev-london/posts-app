'use client'
import { StatusBadge } from '@/components'
import {
  Box,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Post, Status } from '@prisma/client'
import NextLink from 'next/link'
import React from 'react'
import { columns } from '@/helpers/links'

export interface PostQueryParams {
  status: Status
  orderBy: keyof Post
  page: string
}

interface PostsTableProps {
  posts: Post[];
  searchParams: PostQueryParams
}

const PostsTable = ({ posts, searchParams }: PostsTableProps) => {


  return (
    <>
      <TableContainer
        borderRadius={'10px'}
        my={5}
      >
        <Table variant='simple'>
          <Thead bg={'gray.100'}>
            <Tr>
              {columns.map((column, index) => (
                <Th
                  key={column.value}
                  _notFirst={{
                    display: { base: 'none', md: 'table-cell' },
                  }}
                  isNumeric={index === columns.length - 1}
                >
                  <NextLink
                    href={{
                      query: {
                        ...searchParams,
                        orderBy: column.value
                      }
                    }}
                  >
                    {column.label}
                  </NextLink>
                  {column.value === searchParams.orderBy ? (
                    <ChevronUpIcon
                      w={4}
                      h={4}
                      ml={1}
                    />
                  )
                    : (
                      <ChevronDownIcon
                        w={4}
                        h={4}
                        ml={1}
                      />
                    )}
                </Th>
              ))}
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
                  display={{ base: 'none', md: 'table-cell' }}
                  isNumeric
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
