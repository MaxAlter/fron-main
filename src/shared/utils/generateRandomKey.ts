const generateRandomKey = (): string => {
  return Math.floor(Math.random() * Date.now()).toString(36)
}

export default generateRandomKey
