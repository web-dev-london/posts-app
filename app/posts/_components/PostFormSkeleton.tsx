import { Skeleton, Stack } from '@chakra-ui/react';

const PostFormSkeleton = () => {
  return (
    <>
      <Stack
        maxW={'md'}
        spacing={5}
        my={5}
        position={'relative'}
      >
        <Skeleton
          height={'3rem'}
          fadeDuration={2}
          borderRadius={'10px'}
        />
        <Skeleton
          height={'12rem'}
          fadeDuration={2}
          borderRadius={'10px'}
        />
        <Skeleton
          height={'3rem'}
          w={'6rem'}
          fadeDuration={2}
          borderRadius={'10px'}
          position={'absolute'}
          right={0}
          bottom={'-4rem'}
        />
      </Stack>
    </>
  );
};

export default PostFormSkeleton;
