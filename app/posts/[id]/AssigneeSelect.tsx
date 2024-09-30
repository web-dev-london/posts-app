'use client'
import { Users, usersSchema } from '@/schema/schemaView';
import { Select, Skeleton } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

const AssigneeSelect = () => {
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

  return (
    <div>
      <Select placeholder='Select option'>
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
