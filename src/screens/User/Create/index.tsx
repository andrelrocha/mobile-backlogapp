import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';
import { styles } from "../styles";
import { UserCreate } from "../../../types/userCreateDTO";
import { createUser } from "../../../services/user/create";

function Create() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const formattedBirthday = birthday.split('/').reverse().join('-');

  async function handleCreateUser() {
    const userData: UserCreate = {
      login,
      password,
      name,
      cpf,
      phone,
      birthday: formattedBirthday
    };
    
    try {
      const userReturn = await createUser(userData);
      Alert.alert('Conta criada!', `Bem-vindo, ${userReturn.name}`);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao criar a conta. Por favor, tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo ao Backlog App
      </Text>

      <Text style={styles.subtitle}>
        Complete os campos abaixo para se cadastrar
      </Text>

      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <MaskInput
        placeholder="Digite seu CPF"
        style={styles.input}
        value={cpf}
        onChangeText={(masked, unmasked) => setCpf(masked)}
        mask={Masks.BRL_CPF}
        keyboardType="phone-pad"
      />
      <MaskInput
        placeholder="Digite seu telefone"
        style={styles.input}
        value={phone}
        onChangeText={(masked, unmasked) => setPhone(masked)}
        mask={['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
        keyboardType="phone-pad"
      />
      <MaskInput
        placeholder="Digite sua data de nascimento"
        style={styles.input}
        value={birthday}
        onChangeText={(masked, unmasked) => setBirthday(masked)}
        mask={Masks.DATE_DDMMYYYY}
      />
      <TextInput
        placeholder="Digite seu login (email)"
        style={styles.input}
        value={login}
        onChangeText={setLogin}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={[styles.smallButtonGreen, styles.buttonCadastro]}>
          <Text style={styles.smallButtonText} onPress={handleCreateUser}>Cadastre-se</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Create;
