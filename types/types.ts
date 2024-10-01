import { Post, Status } from "@prisma/client"

type PostStatus = {
  label: string
  value?: Status
}

type Column = {
  label: string;
  value: keyof Post;
}

export type { PostStatus, Column }
