import React from 'react';
import { SubscriptionTier } from '../subscription-tier/subscription-tier';
import { DatasetListing } from '../dataset-listing/dataset-listing';
import { mockUser } from '@/data/mockData';

export function Dashboard() {
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
} 