import React from 'react';
import { TierCard } from './tier-card';
import { subscriptionTiers } from '@/data/mockData';

function SubscriptionTier() {
  const handleUpgrade = (tierId: string) => {
    console.log(`Upgrade para o plano ${tierId} solicitado`);
    // Em um cenário real, aqui seria a lógica de upgrade
  };

  const handleDowngrade = (tierId: string) => {
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
}

export { SubscriptionTier }; 