export type SubscriptionTierId = 'explorer' | 'visionary' | 'pioneer';

export interface User {
  name: string;
  email: string;
  subscriptionTier: SubscriptionTierId;
  registeredDate: string;
}

export interface SubscriptionTier {
  id: SubscriptionTierId;
  name: string;
  features: string[];
  isCurrentPlan: boolean;
}

export interface Dataset {
  id: number;
  name: string;
  status: 'active' | 'expired';
  size: string;
  lastUpdated: string;
}

export interface YearlyDatasets {
  year: number;
  datasets: Dataset[];
}

export interface ActionResponse {
  success: boolean;
  error?: {
    message: string;
    code?: string;
  };
  data?: any;
} 