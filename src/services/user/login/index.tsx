import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../../types/userLoginDTO';
import { ApiManager } from '../../../utils/API-axios/ApiManager';

export async function loginUser(userData: User) {
  try {
    const endpoint = '/user/login';

    const headers = {
      'Content-Type': 'application/json',
    };

    await ApiManager.post(endpoint, userData, { headers })
      .then((response) => {
        AsyncStorage.setItem('auth', response.data.token);
      });
    
    //trocar de tela para listagem dados user
  } catch (error) {
    console.error(error);
  }
}
