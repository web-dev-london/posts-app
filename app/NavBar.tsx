'use client'
import { Avatar, Box, Container, HStack, ListItem, Menu, MenuButton, MenuItem, MenuList, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdOutlineLocalPostOffice } from 'react-icons/md'
import { links } from '@/helpers/links'
import { useSession } from 'next-auth/react'



const NavBar = () => {
  const pathname = usePathname()
  const { data: session, status } = useSession();



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
      <Container
        maxW="container.xl"
        px={6}
      >
        <HStack
          justifyContent={'space-between'}
          borderBottom={'1px'}
          borderBottomColor={'gray.200'}
        >
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
          <Box>
            {status === 'authenticated' ? (
              <Menu>
                <MenuButton
                  cursor={'pointer'}
                >
                  <Avatar
                    name={session!.user!.name!}
                    src={session!.user!.image!}
                    size={'sm'}
                  // referrerPolicy='no-referrer'
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    {session!.user!.email}
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="/api/auth/signout"
                  >
                    Sign out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link
                href="/api/auth/signin"
              >
                Sign in
              </Link>
            )}
          </Box>
        </HStack>
      </Container>
    </>
  )
}

export default NavBar
