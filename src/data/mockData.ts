// Dados de usuário mockados
export const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  subscriptionTier: "visionary",
  registeredDate: "2024-10-15"
} as const;

// Níveis de assinatura
export const subscriptionTiers = [
  {
    id: 'explorer',
    name: 'Explorer',
    features: ['Acesso básico a conjuntos de dados públicos', 'Download limitado a 3 arquivos por dia', 'Sem suporte prioritário'],
    isCurrentPlan: mockUser.subscriptionTier === 'explorer'
  },
  {
    id: 'visionary',
    name: 'Visionary',
    features: ['Acesso a conjuntos de dados estendidos', 'Download ilimitado', 'Suporte por email em 24h'],
    isCurrentPlan: mockUser.subscriptionTier === 'visionary'
  },
  {
    id: 'pioneer',
    name: 'Pioneer',
    features: ['Acesso a todos os conjuntos de dados', 'API de acesso direto', 'Suporte prioritário 24/7', 'Painéis analíticos avançados'],
    isCurrentPlan: mockUser.subscriptionTier === 'pioneer'
  }
] as const;

// Conjuntos de dados mockados
export const datasetsList = [
  {
    year: 2023,
    datasets: [
      { id: 1, name: "Dados de Vacinação 2023", status: "active", size: "1.2GB", lastUpdated: "2023-12-15" },
      { id: 2, name: "Estatísticas Hospitalares 2023", status: "active", size: "890MB", lastUpdated: "2023-11-20" },
      { id: 3, name: "Indicadores de Saúde Pública", status: "expired", size: "450MB", lastUpdated: "2023-10-05" }
    ]
  },
  {
    year: 2022,
    datasets: [
      { id: 4, name: "Dados de Vacinação 2022", status: "active", size: "1.1GB", lastUpdated: "2022-12-10" },
      { id: 5, name: "Estatísticas Hospitalares 2022", status: "expired", size: "780MB", lastUpdated: "2022-11-15" }
    ]
  }
] as const; 