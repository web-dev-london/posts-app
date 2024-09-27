import { Badge } from '@chakra-ui/react'
import { Status } from '@prisma/client'
import React from 'react'

interface StatusBadgeProps {
  status: Status
}

const statusMap: Record<Status, { label: string, color: string }> = {
  OPEN: { label: 'Open', color: 'green' },
  IN_PROGRESS: { label: 'In Progress', color: 'yellow' },
  CLOSED: { label: 'Closed', color: 'red' },
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <>
      <Badge
        borderRadius={'4px'}
        p={'2px 6px'}
        colorScheme={statusMap[status].color}
      >
        {statusMap[status].label}
      </Badge>
    </>
  )
}

export default StatusBadge
