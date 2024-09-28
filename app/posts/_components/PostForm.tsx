'use client'
import ErrorMessage from '@/components/ErrorMessage'
import postSchema from '@/schema/postSchema'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, FormControl, FormLabel, Input, Spinner, Textarea } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Post } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'




type PostFormData = z.infer<typeof postSchema>

const PostForm = ({ post }: { post?: Post }) => {
  const { push, refresh } = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  })

  const handleFormSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      if (post)
        await axios.patch(`/api/posts/${post.id}`, data)
      else
        await axios.post('/api/posts', data)
      push('/posts/list');
      refresh();
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
        setIsSubmitting(false)
      }
    }
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
          onSubmit={handleFormSubmit}
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
              defaultValue={post?.title}
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
              defaultValue={post?.description}
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
              isDisabled={isSubmitting}
            >
              {post ? 'Update' : 'Create'}{' '}
              {isSubmitting && <Spinner
                size={'sm'}
                ml={3}
              />}
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  )
}

export default PostForm;
