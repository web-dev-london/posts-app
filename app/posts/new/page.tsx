
import { Box, Button, Input, Textarea } from '@chakra-ui/react'

const NewPostView = () => {
  return (
    <form>
      <Box
        maxW={'md'}
        display={'flex'}
        flexDirection={'column'}
        gap={4}
      >
        <Input placeholder='Basic usage' />
        <Textarea
          resize={'none'}
          rows={6}
          placeholder='Basic usage' />
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
