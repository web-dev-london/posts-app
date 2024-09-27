'use client'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import postSchema from '@/schema/postSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ErrorMessage from '@/components/ErrorMessage'




type PostForm = z.infer<typeof postSchema>

const NewPostView = () => {
  const { push } = useRouter()
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<PostForm>({
    resolver: zodResolver(postSchema),
  })
  return (
    <>
      <Box
        maxW={'md'}
        position={'relative'}
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
          <FormControl
            isInvalid={!!errors.title || !!errors.description}>

            <FormLabel
              m={0}
            >
              Title
            </FormLabel>
            <Input
              mt={1}
              mb={2}
              type='text'
              placeholder='Title'
              {...register('title')}
            />
            <ErrorMessage>
              {errors.title?.message}
            </ErrorMessage>
            <FormLabel
              mt={5}
            >Description
            </FormLabel>
            <Textarea
              resize={'none'}
              rows={6}
              placeholder='Description'
              {...register('description')}
              mb={2}
            />
            <ErrorMessage>
              {errors.description?.message}
            </ErrorMessage>
            <Button
              type="submit"
              colorScheme='yellow'
              position={'absolute'}
              right={0}
              bottom={'-15%'}
              transform={'translate(0, 15%)'}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  )
}

export default NewPostView
