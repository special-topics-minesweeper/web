export const get = () => {
  return sessionStorage.getItem('token');
}

export const set = (token: string) => {
  return sessionStorage.setItem('token', token);
}

export const remove = () => {
  return sessionStorage.removeItem('token');
}
