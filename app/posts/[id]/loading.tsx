import { Card, Skeleton, SkeletonText, Stack } from '@chakra-ui/react'


const LoadingPostDetailPage = () => {
  return (
    <>
      <Stack
        maxW={'md'}
        my={4}
      >
        <Skeleton height={'2rem'} fadeDuration={2} borderRadius={'10px'} />
        <Stack
        >
          <SkeletonText
            fadeDuration={2}
            borderRadius={'2px'}
            skeletonHeight={'10px'}
            w={'50%'}
            noOfLines={2}
          />
        </Stack>
        <Card
          maxW={'md'}
          my={5}
        >
          <Skeleton
            height={'5rem'}
            fadeDuration={2}
            borderRadius={'10px'}
          />
        </Card>
      </Stack>
    </>
  )
}

export default LoadingPostDetailPage
