import { PostStatus } from "@/types/types"

export const links = [
  {
    name: 'Dashboard',
    href: '/'
  },
  {
    name: 'Posts',
    href: '/posts/list'
  }
]

export const statuses = [
  { label: 'All' },
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Closed', value: 'CLOSED' },
] satisfies PostStatus[]