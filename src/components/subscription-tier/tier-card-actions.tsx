'use client'

import React from 'react'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

interface TierCardActionsProps {
  id: string
  name: string
  isCurrentPlan: boolean
  onUpgrade: () => Promise<void>
  onDowngrade: () => Promise<void>
}

export function TierCardActions({ id, name, isCurrentPlan, onUpgrade, onDowngrade }: TierCardActionsProps) {
  const [isPending, startTransition] = useTransition()

  const handleAction = async (action: () => Promise<void>, type: 'upgrade' | 'downgrade') => {
    try {
      startTransition(async () => {
        await action()
        toast.success(`${type === 'upgrade' ? 'Upgrade' : 'Downgrade'} realizado com sucesso.`)
      })
    } catch (error) {
      toast.error('Não foi possível realizar a operação. Tente novamente mais tarde.')
    }
  }

  if (isCurrentPlan) {
    return (
      <div className="text-center text-secondary-700 mb-2">
        Você é atualmente um <span className="font-bold">{name}</span>
      </div>
    )
  }

  if (id === 'explorer') {
    return (
      <Button
        variant="secondary"
        onClick={() => handleAction(onDowngrade, 'downgrade')}
        className="w-full"
        disabled={isCurrentPlan || isPending}
      >
        {isPending ? 'Processando...' : 'Fazer Downgrade'}
      </Button>
    )
  }

  return (
    <Button
      variant="default"
      onClick={() => handleAction(onUpgrade, 'upgrade')}
      className="w-full"
      disabled={isCurrentPlan || isPending}
    >
      {isPending ? 'Processando...' : 'Fazer Upgrade'}
    </Button>
  )
} 