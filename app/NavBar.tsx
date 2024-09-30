import AuthStatus from '@/components/AuthStatus'
import NavLinks from '@/components/NavLinks'
import { Container, HStack } from '@chakra-ui/react'
import React from 'react'



const NavBar = () => {

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
          <NavLinks />
          <AuthStatus />
        </HStack>
      </Container>
    </>
  )
}

export default NavBar
