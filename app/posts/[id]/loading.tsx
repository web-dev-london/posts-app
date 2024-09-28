import { Box, Card, CardBody, Flex } from '@chakra-ui/react'
import { Skeleton } from '@/components'

const LoadingPostDetailPage = () => {
  return (
    <>
      <Box
        maxW={'md'}
      >
        <Skeleton height={'2rem'} />
        <Flex
          gap={5}
          my={2}
        >
          <Skeleton width={'4rem'} />
          <Skeleton width={'7rem'} />
        </Flex>
        <Card
          maxW={'md'}
          my={5}
        >
          <CardBody>
            <Skeleton count={3} />
          </CardBody>
        </Card>
      </Box>
    </>
  )
}

export default LoadingPostDetailPage
