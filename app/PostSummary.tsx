import { Card, CardBody, Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Status } from '@prisma/client';
import React from 'react'

interface PostSummaryProps {
  open: number;
  inProgress: number;
  closed: number;
}
type ListOfPostStatus = {
  label: string;
  value: number;
  status: Status
}

const PostSummary = ({ open, inProgress, closed }: PostSummaryProps) => {

  const contents = [
    { label: "Open Posts", value: open, status: "OPEN" },
    { label: "In Progress Posts", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Posts", value: closed, status: "CLOSED" },
  ] satisfies ListOfPostStatus[]


  return (
    <>
      <Flex
        gap={5}
      >
        {contents.map((content) => (
          <Card key={content.label}>
            <CardBody>
              <Flex
                flexDir={'column'}
              >
                <Link
                  as={NextLink}
                  fontSize={'18px'}
                  href={`/posts/list?status=${content.status}`}
                >
                  {content.label}
                </Link>
                <Text
                  fontSize={'22px'}
                  fontWeight={'600'}
                >
                  {content.value}</Text>
              </Flex>
            </CardBody>
          </Card>
        ))
        }
      </Flex>
    </>
  )
}

export default PostSummary
