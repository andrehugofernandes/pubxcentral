// Tipos para o usuário
export type User = {
  name: string;
  email: string;
  subscriptionTier: 'explorer' | 'visionary' | 'pioneer';
  registeredDate: string;
};

// Tipos para níveis de assinatura
export type SubscriptionTier = {
  id: 'explorer' | 'visionary' | 'pioneer';
  name: string;
  features: string[];
  isCurrentPlan: boolean;
};

// Tipos para datasets
export type Dataset = {
  id: number;
  name: string;
  status: 'active' | 'expired';
  size: string;
  lastUpdated: string;
};

export type YearGroup = {
  year: number;
  datasets: Dataset[];
};

// Tipos para componentes UI
export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
};

export type BadgeProps = {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'active' | 'expired';
  className?: string;
};

export * from './api'
export * from './actions'

export type Theme = 'light' | 'dark' | 'system'
export type Language = 'pt-BR' | 'en-US'

export interface Settings {
  theme: Theme
  language: Language
}

export interface Tokens {
  accessToken: string
  refreshToken: string
}

export interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  tokens: Tokens | null
}

export interface AppState {
  settings: Settings
  auth: AuthState
} 