import axios from 'axios';
import Toast from 'react-native-toast-message';
import { API_URL, AUTH_KEY } from '@env';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: AUTH_KEY,
  },
});

api.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: error.message,
    });
  },
);
