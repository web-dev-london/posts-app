import { z } from 'zod';
// Define Zod Schema for Validation
const postSchema = z.object({
  title: z.string().min(1, { message: 'Title is required and must be at least 1 character' }),
  description: z.string().min(5, { message: 'Description must be at least 5 characters' }),
});
export default postSchema