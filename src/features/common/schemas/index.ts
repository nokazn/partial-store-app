import { z } from 'zod';

export const commonSchema = z.object({
  user: z.object({
    name: z.string(),
    age: z.number().nullable(),
  }),
  auth: z.object({
    isLoggedIn: z.boolean(),
  }),
});

export type CommonSchema = z.infer<typeof commonSchema>;
