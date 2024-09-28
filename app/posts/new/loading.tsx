import { Box } from '@chakra-ui/react';
import { Skeleton } from '@/components';

const LoadingNewPage = () => {
  return (
    <>
      <Box
        maxW={'md'}
      >
        <Skeleton height={'2rem'} />
        <Skeleton height={'20rem'} />
      </Box>
    </>
  );
};

export default LoadingNewPage;
