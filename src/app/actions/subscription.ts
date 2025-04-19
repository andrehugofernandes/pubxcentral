'use server'

import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'
import type { ActionResponse } from '@/types/actions'
import { appErrors } from '@/lib/actions'

const action = createSafeActionClient()

const subscriptionActionSchema = z.object({
  tierId: z.string()
})

export const upgradeSubscription = action
  .schema(subscriptionActionSchema)
  .action(async ({ tierId }): Promise<ActionResponse> => {
    try {
      // Aqui iria a lógica real de upgrade
      console.log(`Upgrade para o plano ${tierId} solicitado`)
      
      return {
        success: true,
        data: { tierId }
      }
    } catch (error) {
      return {
        success: false,
        error: appErrors.UNEXPECTED_ERROR
      }
    }
  })

export const downgradeSubscription = action
  .schema(subscriptionActionSchema)
  .action(async ({ tierId }): Promise<ActionResponse> => {
    try {
      // Aqui iria a lógica real de downgrade
      console.log(`Downgrade para o plano ${tierId} solicitado`)
      
      return {
        success: true,
        data: { tierId }
      }
    } catch (error) {
      return {
        success: false,
        error: appErrors.UNEXPECTED_ERROR
      }
    }
  }) 