import { z } from 'zod'
import { type User, type Error } from './api'
import { authErrorSchema } from './auth'

export type ActionError = {
  code: string
  message: string
  field?: string
}

export type ActionResponse<T = unknown> = {
  success: boolean
  data?: T
  error?: ActionError
}

export const actionErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  field: z.string().optional(),
})

export const actionResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: authErrorSchema.optional(),
  validationErrors: z.record(z.string()).optional(),
})

export type ActionState<T = unknown> = {
  data?: T
  error?: ActionError
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

export const actionStateSchema = z.object({
  data: z.unknown().optional(),
  error: actionErrorSchema.optional(),
  isLoading: z.boolean(),
  isSuccess: z.boolean(), 
  isError: z.boolean(),
})

export type AuthActionResponse = ActionResponse<{
  user: User
  accessToken: string
  refreshToken: string
}>

export type UserActionResponse = ActionResponse<{
  user: User
}>

export const authActionSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const registerActionSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z.string(),
  name: z.string(),
})

export type AuthAction = z.infer<typeof authActionSchema>
export type RegisterAction = z.infer<typeof registerActionSchema>

export type ActionResponse = z.infer<typeof actionResponseSchema>

export const actionValidationErrorSchema = z.object({
  field: z.string(),
  message: z.string(),
})

export type ActionValidationError = z.infer<typeof actionValidationErrorSchema> 