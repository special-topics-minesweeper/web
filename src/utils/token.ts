export const get = () => {
  return sessionStorage.getItem('token');
}

export const set = (token: string) => {
  return sessionStorage.setItem('token', token);
}
