'use client'
import { statuses } from '@/helpers/links'
import { Select } from '@chakra-ui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { ChangeEvent } from 'react'



const PostStatusFilter = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();


  const options = statuses.map((status, index) => (
    <option
      key={index}
      value={status.value}
    >
      {status.label}
    </option>
  ))


  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams();
    if (event.target.value) {
      params.append('status', event.target.value);
    }
    if (searchParams.get('orderBy')) {
      params.append('orderBy', searchParams.get('orderBy')!);
    }
    const query = params.size ? `?${params.toString().toLowerCase()}` : '';
    push(`/posts/list${query}`);
  }

  return (
    <>
      <Select
        defaultValue={searchParams.get('status') || ''}
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
