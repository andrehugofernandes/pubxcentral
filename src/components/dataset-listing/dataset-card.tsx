import React from 'react';
import { Button } from '@/components/ui/button';
import { StatusIndicator } from './status-indicator';

interface DatasetCardProps {
  dataset: {
    name: string;
    status: 'active' | 'expired';
    size: string;
    lastUpdated: string;
  };
}

function DatasetCard({ dataset }: DatasetCardProps) {
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
}

export { DatasetCard }; 