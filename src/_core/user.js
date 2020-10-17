import AsyncStorage from '@react-native-community/async-storage';

const userToken = 'user';

export const getUserToken = async () => {
  return await AsyncStorage.getItem(userToken);
};

export const storeUserToken = async (token) => {
  return await AsyncStorage.setItem(userToken, token);
};

export const removeUserToken = async (token) => {
  return await AsyncStorage.removeItem(userToken);
};
