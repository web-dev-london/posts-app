'use client'
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { HiMiniChevronDoubleLeft, HiMiniChevronDoubleRight, HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

interface PaginationProps {
  totalItems: number
  pageSize: number
  currentPage: number
}

const Pagination = ({ totalItems, pageSize, currentPage }: PaginationProps) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    push(`?${params.toString()}`);
    // const query = params.toString() ? `?${params.toString()}` : '';
    // push(`/posts/list${query}`);
  }

  return (
    <>
      <Flex
        alignItems={'center'}
        gap={2}
      >
        <Text
          fontSize={'sm'}
        >
          Page {currentPage} of {totalPages}
        </Text>
        <IconButton
          onClick={() => handlePageChange(1)}
          icon={<HiMiniChevronDoubleLeft size={25} />}
          aria-label="Previous Page"
          isDisabled={currentPage === 1}
          size={'md'}
        />
        <IconButton
          onClick={() => handlePageChange(currentPage - 1)}
          icon={<HiMiniChevronLeft size={25} />}
          aria-label="Previous Page"
          isDisabled={currentPage === 1}
          size={'md'}
        />
        <IconButton
          onClick={() => handlePageChange(currentPage + 1)}
          icon={<HiMiniChevronRight size={25} />}
          aria-label="Next Page"
          isDisabled={currentPage === totalPages}
          size={'md'}
        />
        <IconButton
          onClick={() => handlePageChange(totalPages)}
          icon={<HiMiniChevronDoubleRight size={25} />}
          aria-label="Next Page"
          isDisabled={currentPage === totalPages}
          size={'md'}
        />
      </Flex>
    </>
  )
}

export default Pagination
