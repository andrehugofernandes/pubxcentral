import { z } from 'zod'
import { authErrorSchema } from './auth'

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  username: z.string(),
  name: z.string(),
  avatar: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  username: z.string(),
  name: z.string(),
})

export const errorSchema = z.object({
  message: z.string(),
  code: z.string(),
})

export type User = z.infer<typeof userSchema>
export type Login = z.infer<typeof loginSchema>
export type Register = z.infer<typeof registerSchema>
export type Error = z.infer<typeof errorSchema>

export type ApiResponse<T> = {
  data?: T
  error?: Error
}

export type LoginResponse = ApiResponse<{
  user: User
  accessToken: string
  refreshToken: string
}>

export type RegisterResponse = ApiResponse<{
  user: User
  accessToken: string
  refreshToken: string
}>

export type UserResponse = ApiResponse<{
  user: User
}>

export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  error: authErrorSchema.optional(),
})

export type ApiResponse = z.infer<typeof apiResponseSchema>

export const paginatedResponseSchema = z.object({
  items: z.array(z.any()),
  total: z.number(),
  page: z.number(),
  limit: z.number(),
  hasMore: z.boolean(),
})

export type PaginatedResponse = z.infer<typeof paginatedResponseSchema>

export const paginationParamsSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  search: z.string().optional(),
  sort: z.string().optional(),
  order: z.enum(['asc', 'desc']).optional(),
})

export type PaginationParams = z.infer<typeof paginationParamsSchema> 