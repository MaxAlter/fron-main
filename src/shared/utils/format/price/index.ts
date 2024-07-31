import compact from 'lodash/compact'
import TonWeb from 'tonweb'

export const formatPriceFromNano = (value: string) => {
  try {
    return TonWeb.utils.fromNano(value)
  } catch {
    return '0'
  }
}

export const subtractPercentageFromPrice = (
  value: string | number,
  ...percentageArgs: (NumberOrNull | undefined)[]
): string => {
  try {
    const percentage = compact(percentageArgs).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )

    return (BigInt(value) - BigInt((Number(value) * (percentage / 100)).toFixed())).toString()
  } catch {
    return '0'
  }
}
