import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { loginUser } from '../../../services/user/login';
import { UserLogin } from '../../../types/userLoginDTO';
import { styles } from '../styles';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const userData: UserLogin = {
      login,
      password
    };

    try {
      await loginUser(userData);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao logar na sua conta. Por favor, tente novamente.');
    }

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
};

export default Login;
