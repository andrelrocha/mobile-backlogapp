import { User } from '../../../types/userDTO';
import { environment } from '../../../utils/environment';

export async function loginUser(userData: User) {
  try {
    console.log('userData:', userData);
    const apiUrl = environment.apiUrl;

  } catch (error) {
    console.error(error);
  }
}
