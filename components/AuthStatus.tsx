'use client'
import { Avatar, Box, Link, Menu, MenuButton, MenuItem, MenuList, SkeletonCircle } from '@chakra-ui/react'

import { useSession } from 'next-auth/react'
import NextLink from 'next/link'
import React from 'react'

const AuthStatus = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <>
        {/* <Skeleton
          height={'1.2rem'}
          width={'4rem'}
          borderRadius={'4px'}
        /> */}
        <SkeletonCircle size='8' />
      </>
    )
  }

  return (
    <>
      <Box>
        {status === 'authenticated'
          ? (
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
              as={NextLink}
              color={'gray.400'}
              _hover={{ color: 'gray.800' }}
              fontSize={'18px'}
              transition={'color .4s ease'}
              href="/api/auth/signin"
            >
              Sign in
            </Link>
          )}
      </Box>

    </>
  )
}

export default AuthStatus
