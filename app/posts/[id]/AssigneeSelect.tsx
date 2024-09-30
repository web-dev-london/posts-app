'use client'
import { Users, usersSchema } from '@/schema/schemaView';
import { Select, Skeleton } from '@chakra-ui/react';
import { Post } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AssigneeSelect = ({ post }: { post: Post }) => {
  const { data: users, isLoading, error } = useQuery<Users>({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users')
      const data: unknown = await response.json()
      const validated = usersSchema.safeParse(data)

      if (!validated.success) {
        throw new Error('Invalid data')
      }

      return validated.data
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    retry: 3,
  })

  if (isLoading) return <Skeleton
    height={'2.3rem'}
    borderRadius={'4px'}
    w={'100%'}
  />

  if (error) return null;

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      await axios.patch(`/api/posts/${post.id}`, {
        assignedToUserId: event.target.value || null
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Select
        onChange={handleSelectChange}
        defaultValue={post.assignedToUserId || ''}
        placeholder='Select option'
      >
        <option value={''}>Unassigned</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </Select>
    </div>
  )
}

export default AssigneeSelect
