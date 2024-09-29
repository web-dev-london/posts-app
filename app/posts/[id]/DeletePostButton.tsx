'use client'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const DeletePostButton = ({ id }: { id: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef<HTMLButtonElement>(null)
  const { push, refresh } = useRouter();
  const [isError, setIsError] = useState(false);

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`/api/posts/${id}`)
      push('/posts/list')
      refresh()
    } catch (error) {
      if (error instanceof Error) {
        setIsError(true)
      }
    }
  };

  return (
    <>
      <Button
        colorScheme='red'
        display={'flex'}
        gap={2}
        onClick={onOpen}
      >
        <FaDeleteLeft />
        Delete Post
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Post
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can not undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme='red'
                onClick={handleDeleteClick}
                ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>


      <AlertDialog
        isOpen={isError}
        isCentered
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              An expected error occurred
            </AlertDialogHeader>

            <AlertDialogBody>
              Something went wrong
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={
                () => setIsError(false)
              }>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeletePostButton
