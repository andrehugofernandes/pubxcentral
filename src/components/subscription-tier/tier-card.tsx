import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TierCardProps {
  tier: {
    id: string;
    name: string;
    features: string[];
    isCurrentPlan: boolean;
  };
  onUpgrade: () => void;
  onDowngrade: () => void;
}

function TierCard({ tier, onUpgrade, onDowngrade }: TierCardProps) {
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
}

export { TierCard }; 