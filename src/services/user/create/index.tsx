import { Alert } from 'react-native';
import { UserCreate } from '../../../types/userCreateDTO';
import { UserReturn } from '../../../types/userReturnDTO';
import { ApiManager } from '../../../utils/API-axios/ApiManager';

export const createUser = async (userData: UserCreate) => {
  try {
    const response = await ApiManager.post('/user/create', userData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error('Erro ao criar usuário:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao criar um usuário. Por favor, tente novamente.');
      });;

    if (response.data) {
      const userReturn: UserReturn = {
        id: response.data.id,
        login: response.data.login,
        name: response.data.name,
        cpf: response.data.cpf,
        phone: response.data.phone,
        birthday: response.data.birthday
      };

      return userReturn;
    } else {
      throw new Error('Não foi possível criar o usuário. Resposta da API vazia.');
    }
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
};