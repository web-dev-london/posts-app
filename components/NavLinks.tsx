'use client'
import { links } from '@/helpers/links'
import { HStack, ListItem, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdOutlineLocalPostOffice } from 'react-icons/md'

const NavLinks = () => {
  const pathname = usePathname()


  const listItems = links.map((link) => {
    return (
      <ListItem
        key={link.name}
        fontSize={'18px'}
        color={`${pathname === link.href ? 'gray.900' : 'gray.400'}`}
        _hover={{ color: 'gray.800' }}
        transition={'color .4s ease'}
      >
        <Link
          href={link.href}
        >
          {link.name}
        </Link>
      </ListItem>
    )
  })
  return (
    <>
      <HStack
        as={'nav'}
        spacing={8}
        h={'60px'}
      >
        <Link href="/">
          <MdOutlineLocalPostOffice size={30} />
        </Link>
        <UnorderedList
          listStyleType="none"
          ml={0}
          display={'flex'}
          gap={5}
        >
          {listItems}
        </UnorderedList>
      </HStack>
    </>
  )
}

export default NavLinks
