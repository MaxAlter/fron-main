export const formatNumberWithSpacing = (value: ValueOrNull<number | string | undefined>) => {
  if (!value) return null

  const typed = typeof value === 'string' ? parseFloat(value) : value

  return typed.toLocaleString()
}
