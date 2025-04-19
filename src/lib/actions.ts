import { type ActionResponse } from '@/types/actions'

export const appErrors = {
  UNEXPECTED_ERROR: {
    code: 'UNEXPECTED_ERROR',
    message: 'Um erro inesperado ocorreu. Por favor, tente novamente mais tarde.',
  },
  VALIDATION_ERROR: {
    code: 'VALIDATION_ERROR', 
    message: 'Dados inválidos fornecidos.',
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    message: 'Recurso não encontrado.',
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    message: 'Não autorizado.',
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    message: 'Acesso negado.',
  },
} as const

export class AppError extends Error {
  code: string
  details?: any

  constructor(code: string, message: string, details?: any) {
    super(message)
    this.code = code
    this.details = details
    this.name = 'AppError'
  }
}

export function handleActionError(error: unknown): ActionResponse {
  console.error('Action error:', error)

  if (error instanceof AppError) {
    return {
      success: false,
      error: {
        code: error.code,
        message: error.message,
        details: error.details,
      },
    }
  }

  return {
    success: false,
    error: appErrors.UNEXPECTED_ERROR,
  }
}

export function createSuccessResponse<T>(data?: T): ActionResponse {
  return {
    success: true,
    data,
  }
}

export function createErrorResponse(
  error: typeof appErrors[keyof typeof appErrors],
  details?: any
): ActionResponse {
  return {
    success: false,
    error: {
      ...error,
      details,
    },
  }
}

export function createValidationErrorResponse(
  validationErrors: Record<string, string>
): ActionResponse {
  return {
    success: false,
    error: appErrors.VALIDATION_ERROR,
    validationErrors,
  }
} 