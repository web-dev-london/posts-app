import { StatusBadge } from '@/components'
import prisma from '@/prisma/client'
import { Avatar, Card, CardBody, Flex, Heading, Link, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

const LatestPost = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 3,
    include: {
      assignedToUser: true
    }
  })
  return (
    <>
      <Card>
        <CardBody>
          <Heading
            size={'md'}
            mb={3}
            ml={6}
          >
            Latest Posts
          </Heading>
          <TableContainer>
            <Table variant='simple'>
              <Tbody>
                {posts.map((post) => (
                  <Tr key={post.id}>
                    <Td>
                      <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Flex
                          flexDir={'column'}
                          gap={2}
                          alignItems={'flex-start'}
                        >
                          <Link
                            as={NextLink}
                            href={`/posts/${post.id}`}
                          >
                            {post.title}
                          </Link>
                          {new Date(post.createdAt).toLocaleDateString()}
                          <StatusBadge status={post.status} />
                        </Flex>
                        {post.assignedToUser && (
                          <Avatar
                            src={post.assignedToUser.image!}
                            name={post.assignedToUser.name!}
                            size={'sm'}
                          />
                        )}
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  )
}

export default LatestPost
