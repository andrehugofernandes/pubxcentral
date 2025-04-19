import { Language, Theme } from '@/types/constants'

export const APP_CONFIG = {
  name: 'PubXCentral',
  description: 'Your central hub for public data access and analysis',
  version: '1.0.0',
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
  },
  user: {
    profile: '/api/user/profile',
    settings: '/api/user/settings',
  },
  datasets: {
    list: '/api/datasets',
    download: (id: string) => `/api/datasets/${id}/download`,
    metadata: (id: string) => `/api/datasets/${id}/metadata`,
  },
  subscription: {
    plans: '/api/subscription/plans',
    current: '/api/subscription/current',
    upgrade: '/api/subscription/upgrade',
    cancel: '/api/subscription/cancel',
  },
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  NOT_FOUND: '/404',
} as const;

export const DATE_FORMATS = {
  display: 'DD/MM/YYYY',
  api: 'YYYY-MM-DD',
  full: 'DD/MM/YYYY HH:mm:ss',
} as const;

export const STORAGE_KEYS = {
  THEME: 'theme',
  LANGUAGE: 'language',
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
} as const;

export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 10,
} as const;

export const FILE_SIZES = {
  maxUpload: 100 * 1024 * 1024, // 100MB
  maxDownload: 500 * 1024 * 1024, // 500MB
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const DEFAULT_LANGUAGE: Language = 'pt-BR'
export const DEFAULT_THEME: Theme = 'system'

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USER: {
    PROFILE: '/user/profile',
    SETTINGS: '/user/settings',
  },
} as const

export const QUERY_KEYS = {
  USER: {
    PROFILE: ['user', 'profile'],
    SETTINGS: ['user', 'settings'],
  },
} as const

export const LIMITS = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 32,
  MIN_USERNAME_LENGTH: 3,
  MAX_USERNAME_LENGTH: 20,
} as const

export const REGEX = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  USERNAME: /^[a-zA-Z0-9_-]{3,20}$/,
} as const 