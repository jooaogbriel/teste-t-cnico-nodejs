import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export { userSchema };