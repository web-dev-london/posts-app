import { StatusBadge } from '@/components'
import { Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react'
import { Post } from '@prisma/client'


const PostDetails = ({ post }: { post: Post }) => {
  return (
    <>
      <Heading>{post.title}</Heading>
      <Flex
        gap={5}
        my={2}
      >
        <StatusBadge status={post.status} />
        <Text>{post.createdAt.toDateString()}</Text>
      </Flex>
      <Card
        maxW={'full'}
        my={5}
      >
        <CardBody>
          {post.description}
        </CardBody>
      </Card>

    </>
  )
}

export default PostDetails
