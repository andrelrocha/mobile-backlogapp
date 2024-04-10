import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../../types/userLoginDTO';
import { ApiManager } from '../../../utils/API-axios/ApiManager';
import { Alert } from 'react-native';

export async function loginUser(userData: User) {
  try {
    let status = false;

    const endpoint = '/user/login';

    const headers = {
      'Content-Type': 'application/json',
    };

    await ApiManager.post(endpoint, userData, { headers })
      .then((response) => {
        AsyncStorage.setItem('auth', response.data.token);
        status = true;
      })
      .catch((error) => {
        console.error('Erro ao fazer login:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao logar na sua conta. Por favor, tente novamente.');
      });
    
    return status;
  } catch (error) {
    console.error(error);
  }
}
