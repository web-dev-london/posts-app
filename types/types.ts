import { Status } from "@prisma/client"

type PostStatus = {
  label: string
  value?: Status
}
export type { PostStatus }