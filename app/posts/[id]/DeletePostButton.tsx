'use client'
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
// import Link from 'next/link'
import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const DeletePostButton = ({ id }: { id: number }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef<HTMLButtonElement>(null)
  const { push, refresh } = useRouter();
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
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can not undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={async () => {
                onClose()
                await axios.delete(`/api/posts/${id}`)
                push('/posts/list')
                refresh()
              }} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeletePostButton
