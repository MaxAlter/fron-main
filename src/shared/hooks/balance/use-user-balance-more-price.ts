import { useCurrentBalance } from './use-current-balance'

export const useUserBalanceMorePrice = () => {
  const geBalance = useCurrentBalance()

  return async (price: string) => {
    const balance = await geBalance()

    return BigInt(balance) >= BigInt(price)
  }
}
