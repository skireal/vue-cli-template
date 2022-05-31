export const getRandomString = (length = 10) => {
  return Math.random().toString(16).substr(2, length)
}
