'use client'

import React from 'react';
import { TierCard } from './tier-card';
import { subscriptionTiers } from '@/data/mockData';
import { upgradeSubscription, downgradeSubscription } from '@/app/actions/subscription';

export function SubscriptionTier() {
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
              onUpgrade={() => upgradeSubscription({ tierId: tier.id })}
              onDowngrade={() => downgradeSubscription({ tierId: tier.id })}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 