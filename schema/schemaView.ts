import { z } from 'zod';
// Define Zod Schema for Validation
const postSchema = z.object({
  title: z.string().min(1, { message: 'Title is required and must be at least 1 character' }),
  description: z.string().min(5, { message: 'Description must be at least 5 characters' }),
});


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

export { postSchema, userSchema, usersSchema };

