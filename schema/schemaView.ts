import { z } from 'zod';
// Define Zod Schema for Validation
const postSchema = z.object({
  title: z.string().min(1, { message: 'Title is required and must be at least 1 character' }),
  description: z.string().min(5, { message: 'Description must be at least 5 characters' }).max(65535),
});

const patchPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(255)
    .optional(),
  description: z
    .string()
    .min(1, "Description is required.")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "AssignedToUserId is required.")
    .max(255)
    .optional()
    .nullable(),
})


const userSchema = z.object({
  createdAt: z.string(z.date()),
  email: z.string(),
  id: z.string(),
  emailVerified: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  updatedAt: z.string(z.date()),
  username: z.string().optional().nullable(),
});

const usersSchema = z.array(userSchema);
type Users = z.infer<typeof usersSchema>;

export type { Users };

export { patchPostSchema, postSchema, userSchema, usersSchema };

