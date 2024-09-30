'use client'
import { Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Users, usersSchema } from '@/schema/schemaView'

const AssigneeSelect = () => {
  const [users, setUsers] = useState<Users>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data: unknown = await response.json();
        const validation = usersSchema.safeParse(data);
        if (!validation.success) {
          console.error('Error parsing users:', validation.error.format());
          return;
        }
        setUsers(validation.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);


  return (
    <div>
      <Select placeholder='Select option'>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </Select>
    </div>
  )
}

export default AssigneeSelect
