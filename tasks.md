# PubXentral MVP - Implementação com Cursor.ai

## Introdução

Este documento contém instruções para implementação do MVP do PubXentral usando Cursor.ai. Vamos desenvolver um frontend para uma plataforma de acesso a dados de saúde pública com sistema de níveis de assinatura.

## Contexto do Projeto

PubXentral é uma plataforma que disponibiliza dados de saúde pública através de um sistema de download organizado em diferentes níveis de assinatura (Explorer, Visionary, Pioneer). O backend, metadados e sistema de URLs pré-assinadas já estão desenvolvidos.

## Tecnologias a Utilizar

- React.js para construção de componentes
- TailwindCSS para estilização
- Apenas dados mockados (sem integração com API real)

## Estrutura do Projeto

```
src/
├── components/
│   ├── Dashboard/
│   ├── SubscriptionTier/
│   ├── DatasetListing/
│   └── UI/
├── contexts/
├── hooks/
├── data/
├── utils/
└── App.jsx
```

## Tarefas de Implementação

### Tarefa 1: Configuração Inicial do Projeto

```
# Crie um novo projeto React com Vite
npm create vite@latest pubxcentral-frontend -- --template react

# Entre no diretório do projeto
cd pubxcentral-frontend

# Instale as dependências
npm install

# Adicione TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure o tailwind.config.js
```

### Tarefa 2: Configuração do TailwindCSS

Atualize o arquivo `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}
```

Atualize o arquivo `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Tarefa 3: Configurar Dados Mockados

Crie o arquivo `src/data/mockData.js`:

```javascript
// Dados de usuário mockados
export const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  subscriptionTier: "visionary",
  registeredDate: "2024-10-15"
};

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
];

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
];
```

### Tarefa 4: Implementar Componentes UI Básicos

Crie o arquivo `src/components/UI/Button.jsx`:

```jsx
import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '',
  type = 'button'
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-200 text-secondary-800 hover:bg-secondary-300 focus:ring-secondary-300',
    outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };
  
  const sizeClasses = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

Crie o arquivo `src/components/UI/Card.jsx`:

```jsx
import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  highlighted = false 
}) => {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md p-6 
        ${highlighted ? 'ring-2 ring-primary-500 shadow-lg' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
```

Crie o arquivo `src/components/UI/Badge.jsx`:

```jsx
import React from 'react';

const Badge = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variantClasses = {
    default: 'bg-secondary-100 text-secondary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    active: 'bg-green-100 text-green-800',
    expired: 'bg-red-100 text-red-800'
  };

  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variantClasses[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
```

### Tarefa 5: Implementar Componente de Nível de Assinatura (Milestone 1)

Crie o arquivo `src/components/SubscriptionTier/TierCard.jsx`:

```jsx
import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Badge from '../UI/Badge';

const TierCard = ({ tier, onUpgrade, onDowngrade }) => {
  const { id, name, features, isCurrentPlan } = tier;
  
  return (
    <Card 
      highlighted={isCurrentPlan}
      className="flex flex-col h-full transition-all hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-secondary-900">{name}</h3>
        {isCurrentPlan && (
          <Badge variant="success">Plano Atual</Badge>
        )}
      </div>
      
      <ul className="mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-2">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            <span className="text-secondary-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        {isCurrentPlan ? (
          <div className="text-center text-secondary-700 mb-2">
            Você é atualmente um <span className="font-bold">{name}</span>
          </div>
        ) : id === 'explorer' ? (
          <Button 
            variant="secondary" 
            onClick={onDowngrade} 
            className="w-full"
            disabled={isCurrentPlan}
          >
            Fazer Downgrade
          </Button>
        ) : (
          <Button 
            variant="primary" 
            onClick={onUpgrade} 
            className="w-full"
            disabled={isCurrentPlan}
          >
            Fazer Upgrade
          </Button>
        )}
      </div>
    </Card>
  );
};

export default TierCard;
```

Crie o arquivo `src/components/SubscriptionTier/SubscriptionTier.jsx`:

```jsx
import React from 'react';
import TierCard from './TierCard';
import { subscriptionTiers } from '../../data/mockData';

const SubscriptionTier = () => {
  const handleUpgrade = (tierId) => {
    console.log(`Upgrade para o plano ${tierId} solicitado`);
    // Em um cenário real, aqui seria a lógica de upgrade
  };

  const handleDowngrade = (tierId) => {
    console.log(`Downgrade para o plano ${tierId} solicitado`);
    // Em um cenário real, aqui seria a lógica de downgrade
  };

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-secondary-900 mb-2">Níveis de Assinatura</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Escolha o plano que melhor atende às suas necessidades de acesso a dados de saúde pública.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionTiers.map((tier) => (
            <TierCard 
              key={tier.id}
              tier={tier}
              onUpgrade={() => handleUpgrade(tier.id)}
              onDowngrade={() => handleDowngrade(tier.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTier;
```

### Tarefa 6: Implementar Indicadores de Status para Arquivos

Crie o arquivo `src/components/DatasetListing/StatusIndicator.jsx`:

```jsx
import React from 'react';
import Badge from '../UI/Badge';

const StatusIndicator = ({ status }) => {
  if (status === 'active') {
    return (
      <Badge variant="active" className="flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
        Ativo
      </Badge>
    );
  } else if (status === 'expired') {
    return (
      <Badge variant="expired" className="flex items-center">
        <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
        Expirado
      </Badge>
    );
  }
  
  return null;
};

export default StatusIndicator;
```

### Tarefa 7: Implementar Listagem de Conjuntos de Dados

Crie o arquivo `src/components/DatasetListing/DatasetCard.jsx`:

```jsx
import React from 'react';
import Button from '../UI/Button';
import StatusIndicator from './StatusIndicator';

const DatasetCard = ({ dataset }) => {
  const { name, status, size, lastUpdated } = dataset;
  
  const handleDownload = () => {
    console.log(`Download solicitado: ${name}`);
    // Em um cenário real, aqui seria a lógica de download com URLs pré-assinadas
  };
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-secondary-200 rounded-lg mb-3 bg-white hover:shadow-md transition">
      <div className="mb-3 sm:mb-0">
        <h4 className="font-medium text-secondary-900">{name}</h4>
        <div className="flex flex-col sm:flex-row sm:items-center text-sm text-secondary-600 mt-1">
          <span className="mr-3">Tamanho: {size}</span>
          <span className="mr-3">Atualizado: {lastUpdated}</span>
          <StatusIndicator status={status} />
        </div>
      </div>
      
      <Button 
        variant={status === 'active' ? 'primary' : 'secondary'}
        size="sm"
        onClick={handleDownload}
        disabled={status !== 'active'}
      >
        {status === 'active' ? 'Download' : 'Expirado'}
      </Button>
    </div>
  );
};

export default DatasetCard;
```

Crie o arquivo `src/components/DatasetListing/YearGroup.jsx`:

```jsx
import React, { useState } from 'react';
import DatasetCard from './DatasetCard';

const YearGroup = ({ yearData }) => {
  const { year, datasets } = yearData;
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <div className="mb-6">
      <div 
        className="flex items-center justify-between bg-secondary-100 p-3 rounded-t-lg cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="font-bold text-lg text-secondary-800">Conjuntos de Dados {year}</h3>
        <button className="text-secondary-600 hover:text-secondary-800">
          {isExpanded ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
          )}
        </button>
      </div>
      
      {isExpanded && (
        <div className="border border-secondary-200 border-t-0 rounded-b-lg p-4 bg-secondary-50">
          {datasets.map(dataset => (
            <DatasetCard key={dataset.id} dataset={dataset} />
          ))}
        </div>
      )}
    </div>
  );
};

export default YearGroup;
```

Crie o arquivo `src/components/DatasetListing/DatasetListing.jsx`:

```jsx
import React from 'react';
import YearGroup from './YearGroup';
import { datasetsList } from '../../data/mockData';

const DatasetListing = () => {
  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-secondary-900 mb-2">Conjuntos de Dados Disponíveis</h2>
          <p className="text-secondary-600">
            Explore e faça download dos conjuntos de dados de saúde pública disponíveis para o seu nível de acesso.
          </p>
        </div>
        
        {datasetsList.map(yearData => (
          <YearGroup key={yearData.year} yearData={yearData} />
        ))}
      </div>
    </div>
  );
};

export default DatasetListing;
```

### Tarefa 8: Implementar Dashboard Principal

Crie o arquivo `src/components/Dashboard/Dashboard.jsx`:

```jsx
import React from 'react';
import SubscriptionTier from '../SubscriptionTier/SubscriptionTier';
import DatasetListing from '../DatasetListing/DatasetListing';
import { mockUser } from '../../data/mockData';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-primary-700">PubXentral</h1>
            <p className="text-secondary-600">Portal de Dados de Saúde Pública</p>
          </div>
          <div className="text-right">
            <p className="font-medium">Bem-vindo, {mockUser.name}</p>
            <p className="text-sm text-secondary-600">{mockUser.email}</p>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <SubscriptionTier />
          <DatasetListing />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">PubXentral</h3>
              <p className="text-secondary-300">Tornando dados de saúde pública acessíveis.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-secondary-300">&copy; 2025 PubXentral. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
```

### Tarefa 9: Atualizar App.jsx e Implementar Projeto Completo

Atualize o arquivo `src/App.jsx`:

```jsx
import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
```

### Tarefa 10: Teste e Otimização

Depois de implementar todos os componentes, use os seguintes comandos para iniciar o aplicativo:

```
# Executar o aplicativo em modo de desenvolvimento
npm run dev

# Criar build de produção (quando estiver pronto para entrega)
npm run build
```

## Verificação Final para Milestone 1

Verifique se o componente de exibição de nível de assinatura atende a todos os requisitos:
- Exibe os 3 níveis: Explorer, Visionary, Pioneer
- Indica claramente o plano atual do usuário
- Tem botões de "Upgrade" e "Downgrade" (mockados)
- O design é responsivo e se adapta a diferentes tamanhos de tela
- Usa apenas dados mockados (sem integração com API)

## Requisitos Técnicos Finais

- Código limpo e bem estruturado
- Componentes organizados de forma lógica
- Design totalmente responsivo
- Utilização eficiente do TailwindCSS
- Uso exclusivo de React + Tailwind (sem outras bibliotecas UI)