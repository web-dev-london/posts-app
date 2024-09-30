import { Users, usersSchema } from '@/schema/schemaView'
import { useQuery } from '@tanstack/react-query';
import ms from 'ms'



const useUsers = () => useQuery<Users>({
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
  staleTime: ms('24h'), // 24 hours
  retry: 3,
})

export default useUsers
