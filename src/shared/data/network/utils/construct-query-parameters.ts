export const constructQueryParameters = (params: object) => {
  const result = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        value.forEach((v) => result.append(key, v))
      } else {
        result.set(key, value)
      }
    }
  }

  return result.toString() ? `?${result.toString()}` : ''
}
