/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import logo from '../../assets/controller-xbox.png';
import { colors } from '../../utils/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Backlog APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: colors.sage
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  title: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 'bold',
    color: colors.black
  }
});
