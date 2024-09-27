'use client'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Input, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface FormData {
  title: string
  description: string
}

const NewPostView = () => {
  const { push } = useRouter()
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm<FormData>()
  return (
    <>
      <Box
        maxW={'md'}
        whiteSpace={'wrap'}
      >
        {error &&
          (<Alert
            borderRadius={'5px'}
            my={5}
            status='error'>
            <AlertIcon />
            <AlertTitle>{error}</AlertTitle>
            <AlertDescription>Something went wrong...</AlertDescription>
          </Alert>)}
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              await axios.post('/api/posts', data)
              push('/posts')
            } catch (error) {
              if (error instanceof Error) {
                setError(error.message)
              }
            }
          })}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={4}
          >
            <Input placeholder='Title' {...register('title')} />
            <Textarea
              resize={'none'}
              rows={6}
              placeholder='Description' {...register('description')} />
            <Button
              type="submit"
              colorScheme='yellow'
              flexGrow={'1'}
              ml={'auto'}
              display={'inline-block'}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}

export default NewPostView
