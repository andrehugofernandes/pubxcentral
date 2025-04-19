'use client';

import React, { useState } from 'react';
import { DatasetCard } from './dataset-card';

interface YearGroupProps {
  yearData: {
    year: number;
    datasets: Array<{
      id: number;
      name: string;
      status: 'active' | 'expired';
      size: string;
      lastUpdated: string;
    }>;
  };
}

function YearGroup({ yearData }: YearGroupProps) {
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
}

export { YearGroup }; 