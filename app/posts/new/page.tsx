'use client'
import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface FormData {
  title: string
  description: string
}

const NewPostView = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm<FormData>()
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/posts', data)
        push('/posts')
      })}
    >
      <Box
        maxW={'md'}
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
  )
}

export default NewPostView
