'use client'
import { Select } from '@chakra-ui/react'
import { Status } from '@prisma/client'
import React from 'react'

type PostStatus = {
  label: string
  value?: Status
}

const statuses = [
  { label: 'All' },
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Closed', value: 'CLOSED' },
] satisfies PostStatus[]

const PostStatusFilter = () => {
  return (
    <>
      <Select
        name='status'
        placeholder='All'
        size={'md'}
        borderRadius={'4px'}
        w={'20%'}
      >
        {statuses.map((status) => (
          <option
            key={status.value}
            value={status.value}
          >
            {status.label}
          </option>
        ))}
      </Select>
    </>
  )
}

export default PostStatusFilter
