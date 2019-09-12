import { AsyncStorage } from 'react-native';


export const getToken = async () => {
  const TOKEN_KEY = await AsyncStorage.getItem('token');

  console.log(TOKEN_KEY);
  return TOKEN_KEY;
};
