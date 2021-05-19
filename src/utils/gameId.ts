export const get = () => {
  return sessionStorage.getItem('gameId');
}

export const set = (token: string) => {
  return sessionStorage.setItem('gameId', token);
}

export const remove = () => {
  return sessionStorage.removeItem('gameId');
}
