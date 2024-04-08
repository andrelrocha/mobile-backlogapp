import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';
import { styles } from "../styles";

function Create() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Digite seus dados
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
        onChangeText={(masked, ) => setCpf(masked)}
        mask={Masks.BRL_CPF}
      />
      <MaskInput
        placeholder="Digite seu telefone"
        style={styles.input}
        value={phone}
        onChangeText={(masked, ) => setPhone(masked)}
        mask={['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
        keyboardType="phone-pad"
      />
      <MaskInput
        placeholder="Digite sua data de nascimento"
        style={styles.input}
        value={birthday}
        onChangeText={(masked, ) => setBirthday(masked)}
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
        secureTextEntry
        />
    </View>
  );
}

export default Create;