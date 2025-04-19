import { z } from 'zod'
import { User, userSchema } from './user'

export const authSchema = z.object({
  user: userSchema,
  token: z.string(),
})

export type Auth = z.infer<typeof authSchema>

export const authStateSchema = z.object({
  user: userSchema.nullable(),
  token: z.string().nullable(),
  isLoading: z.boolean(),
  isAuthenticated: z.boolean(),
})

export type AuthState = z.infer<typeof authStateSchema>

export const authErrorSchema = z.object({
  code: z.enum(['INVALID_CREDENTIALS', 'USER_NOT_FOUND', 'EMAIL_ALREADY_EXISTS']),
  message: z.string(),
})

export type AuthError = z.infer<typeof authErrorSchema>

export const authTokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiresIn: z.number(),
})

export type AuthToken = z.infer<typeof authTokenSchema>

export const authResponseSchema = z.object({
  user: z.lazy(() => User),
  token: authTokenSchema,
})

export type AuthResponse = z.infer<typeof authResponseSchema> 