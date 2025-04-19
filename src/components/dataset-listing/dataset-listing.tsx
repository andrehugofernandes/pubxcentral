import React from 'react';
import { YearGroup } from './year-group';
import { datasetsList } from '@/data/mockData';

function DatasetListing() {
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
}

export { DatasetListing }; 