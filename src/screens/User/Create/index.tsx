import React, { useState } from "react";
import { Alert, Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaskInput, { Masks } from 'react-native-mask-input';
import DatePicker from "react-native-date-picker";
import { styles } from "../styles";
import { UserCreate } from "../../../types/userCreateDTO";
import { createUser } from "../../../services/user/create";
import useUserCreation from "../../../hooks/user/useUserCreation";

function Create() {
  const {
    login, setLogin,
    password, setPassword,
    name, setName,
    cpf, setCpf,
    phone, setPhone,
    birthday, setBirthday,
    birthdaySelected, setBirthdaySelected,
    open, setOpen,
    formattedBirthday, formattedBirthdayApi
  } = useUserCreation();


  async function handleCreateUser() {
    const userData: UserCreate = {
      login,
      password,
      name,
      cpf,
      phone,
      birthday: formattedBirthdayApi
    };
    
    try {
      const userReturn = await createUser(userData);
      if (userReturn !== null) {
        Alert.alert('Conta criada!', `Bem-vindo, ${userReturn.name}`);
        //trocar para a tela de login
      }
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

      <TextInput
        placeholder="Digite sua data de nascimento"
        style={styles.input}
        value={birthdaySelected ? formattedBirthday : ''}
        onPressIn={() => setOpen(true)}
      />

      <DatePicker
        modal
        open={open}
        date={birthday}
        onConfirm={(date) => {
            setOpen(false);
            setBirthday(date);
            setBirthdaySelected(true);
          }
        }
        onCancel={() => {
          setOpen(false)
        }}
        mode="date"
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
