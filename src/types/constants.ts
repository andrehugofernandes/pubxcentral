import { APP_CONFIG, API_ENDPOINTS, ROUTES, DATE_FORMATS, STORAGE_KEYS, DEFAULT_PAGINATION, FILE_SIZES, HTTP_STATUS } from '@/constants';

export type AppConfig = typeof APP_CONFIG;
export type ApiEndpoints = typeof API_ENDPOINTS;
export type Routes = typeof ROUTES;
export type DateFormats = typeof DATE_FORMATS;
export type StorageKeys = typeof STORAGE_KEYS;
export type DefaultPagination = typeof DEFAULT_PAGINATION;
export type FileSizes = typeof FILE_SIZES;
export type HttpStatus = typeof HTTP_STATUS;

export type PaginationParams = {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: {
    code: keyof typeof HTTP_STATUS;
    message: string;
  };
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

export type Language = 'pt-BR' | 'en-US' | 'es-ES';

export const languages: Language[] = ['pt-BR', 'en-US', 'es-ES'];

export type Theme = 'light' | 'dark' | 'system';

export const themes: Theme[] = ['light', 'dark', 'system']; 