/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { useState } from 'react';

import { loginUser } from '../../services/user/login';
import { User } from '../../types/userDTO';
import { styles } from './styles';


function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const userData: User = {
      login,
      password
    };
    loginUser(userData);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu login"
        value={login}
        onChangeText={setLogin}
        autoFocus
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.smallButtonGreen}>
          <Text style={styles.smallButtonText}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.smallButtonRed}>
          <Text style={styles.smallButtonText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}



export default Login;