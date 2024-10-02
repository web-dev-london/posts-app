'use client'
import { Flex, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import { HiMiniChevronDoubleLeft, HiMiniChevronDoubleRight, HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";

interface PaginationProps {
  totalItems: number
  pageSize: number
  currentPage: number
}

const Pagination = ({ totalItems, pageSize, currentPage }: PaginationProps) => {

  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalPages <= 1) return null


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
          icon={<HiMiniChevronDoubleLeft size={25} />}
          aria-label="Previous Page"
          isDisabled={currentPage === 1}
          size={'md'}
        />
        <IconButton
          icon={<HiMiniChevronLeft size={25} />}
          aria-label="Previous Page"
          isDisabled={currentPage === 1}
          size={'md'}
        />
        <IconButton
          icon={<HiMiniChevronRight size={25} />}
          aria-label="Next Page"
          isDisabled={currentPage === totalPages}
          size={'md'}
        />
        <IconButton
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
