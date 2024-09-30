import {
  Box,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import React from 'react'

const LoadingPostPage = () => {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8]
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
              <Tr key={post}>
                <Td
                >
                  <SkeletonText
                    fadeDuration={2}
                    skeletonHeight={'22px'}
                    noOfLines={1}
                    borderRadius={'10px'}
                    spacing={3}
                    mt={1}
                  />
                  <Box
                    display={{ base: 'block', md: 'none' }}
                    mt={3}
                  >
                    <SkeletonText
                      fadeDuration={2}
                      skeletonHeight={'22px'}
                      noOfLines={1}
                      borderRadius={'10px'}
                      spacing={2}
                      w={'50%'}
                      mt={1}
                    />
                  </Box>
                </Td>
                <Td
                  display={{ base: 'none', md: 'table-cell' }}
                >
                  <SkeletonText
                    fadeDuration={2}
                    skeletonHeight={'22px'}
                    noOfLines={1}
                    borderRadius={'10px'}
                    spacing={3}
                    mt={1}
                  />
                </Td>
                <Td
                  isNumeric
                  display={{ base: 'none', md: 'table-cell' }}
                >
                  <SkeletonText
                    fadeDuration={2}
                    skeletonHeight={'22px'}
                    noOfLines={1}
                    borderRadius={'10px'}
                    spacing={3}
                    mt={1}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default LoadingPostPage
