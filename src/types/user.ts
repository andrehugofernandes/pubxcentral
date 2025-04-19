import { z } from 'zod'

export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  avatar_url: z.string().url().optional(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
})

export type User = z.infer<typeof userSchema>

export const userLoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
})

export type UserLogin = z.infer<typeof userLoginSchema>

export const userRegisterSchema = userLoginSchema.extend({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  confirmPassword: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Senhas não conferem',
  path: ['confirmPassword'],
})

export type UserRegister = z.infer<typeof userRegisterSchema>

export const userUpdateSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres').optional(),
  email: z.string().email('Email inválido').optional(),
  avatar_url: z.string().url('URL inválida').optional(),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres').optional(),
  currentPassword: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres').optional(),
}).refine((data) => {
  if (data.password && !data.currentPassword) {
    return false
  }
  return true
}, {
  message: 'Senha atual é necessária para alterar a senha',
  path: ['currentPassword'],
})

export type UserUpdate = z.infer<typeof userUpdateSchema> 