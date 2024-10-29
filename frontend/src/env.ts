import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['production', 'development', 'test']).default('production'),
  VITE_API_URL: z.string(),
})

export const env = envSchema.parse(import.meta.env)
