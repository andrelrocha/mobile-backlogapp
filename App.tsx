import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, View } from 'react-native';
import Login from './src/screens/User/Login';
import Create from './src/screens/User/Create';
//import ListUser from './src/screens/User/ListUser';
//import ListAllGames from './src/screens/Games/ListAll';
import Header from './src/components/header';
import Home from './src/screens/Home';
import { styles } from './styles';	

function App() {
  return (
    <View style={styles.body}>
      <KeyboardAvoidingView
        behavior='padding'
        style={{flex: 1}}
        enabled>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header />
          <Home />
          {/* <ListUser /> */}
          { /* <Login />
          <Create />  */}
          {/* <ListAllGames /> */}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </View>
  );
}

export default App;
