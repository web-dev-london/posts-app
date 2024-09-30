import { FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { PropsWithChildren } from 'react'

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null
  return (
    <>
      <FormErrorMessage mt={0} mb={5}>
        {children}
      </FormErrorMessage>
    </>
  )
}

export default ErrorMessage
