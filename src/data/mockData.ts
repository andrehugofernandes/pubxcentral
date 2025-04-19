import { User, SubscriptionTier, YearlyDatasets } from '@/types/subscription';

// Dados de usuário mockados
export const mockUser: User = {
  name: "John Doe",
  email: "john@example.com",
  subscriptionTier: "explorer",
  registeredDate: "2024-01-15"
};

// Níveis de assinatura
export const subscriptionTiers: SubscriptionTier[] = [
  {
    id: "explorer",
    name: "Explorer",
    features: [
      "Access to basic datasets",
      "Standard support",
      "Monthly updates"
    ],
    isCurrentPlan: mockUser.subscriptionTier === "explorer"
  },
  {
    id: "visionary",
    name: "Visionary", 
    features: [
      "Access to premium datasets",
      "Priority support",
      "Weekly updates",
      "Advanced analytics"
    ],
    isCurrentPlan: mockUser.subscriptionTier === "visionary"
  },
  {
    id: "pioneer",
    name: "Pioneer",
    features: [
      "Access to all datasets",
      "24/7 dedicated support",
      "Real-time updates",
      "Advanced analytics",
      "Custom integrations"
    ],
    isCurrentPlan: mockUser.subscriptionTier === "pioneer"
  }
];

// Conjuntos de dados mockados
export const datasetsList: YearlyDatasets[] = [
  {
    year: 2023,
    datasets: [
      {
        id: 1,
        name: "Global Market Trends 2023",
        status: "active",
        size: "2.5GB",
        lastUpdated: "2023-12-15"
      },
      {
        id: 2,
        name: "Consumer Behavior Analysis",
        status: "active", 
        size: "1.8GB",
        lastUpdated: "2023-11-30"
      }
    ]
  },
  {
    year: 2022,
    datasets: [
      {
        id: 3,
        name: "Industry Reports 2022",
        status: "expired",
        size: "3.2GB",
        lastUpdated: "2022-12-20"
      },
      {
        id: 4,
        name: "Regional Market Analysis",
        status: "expired",
        size: "2.1GB", 
        lastUpdated: "2022-11-25"
      }
    ]
  }
]; 