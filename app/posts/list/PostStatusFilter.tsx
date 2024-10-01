'use client'
import { statuses } from '@/helpers/links'
import { Select } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import React from 'react'



const PostStatusFilter = () => {
  const { push } = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const query = event.target.value ? `?status=${event.target.value}` : ''
    push(`/posts/list${query}`)
  }

  const options = statuses.map((status, index) => (
    <option
      key={index}
      value={status.value}
    >
      {status.label}
    </option>
  ))
  return (
    <>
      <Select
        onChange={handleSelectChange}
        name='status'
        size={'md'}
        borderRadius={'4px'}
        w={'10rem'}
      >
        {options}
      </Select>
    </>
  )
}

export default PostStatusFilter;
