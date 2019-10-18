

export const TOKEN_KEY = window.localStorage.getItem('TOKEN_KEY');
export const isAuthenticated = () => window.localStorage.getItem('TOKEN_KEY') !== null;
export const getToken = async () => {
  const response = await window.localStorage.getItem('TOKEN_KEY');

  const token = JSON.parse(response);

  return token;
};


export const logout = () => {
  localStorage.removeItem('TOKEN_KEY');
  localStorage.removeItem('USER_NAME');
};
