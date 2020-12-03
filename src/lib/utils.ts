export const getRandomUsername = () => {
  return `user-${Math.floor(Math.random() * Date.now())}`
}
