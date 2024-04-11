import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
//import Home from './src/screens/Home';
//import Login from './src/screens/User/Login';
//import Create from './src/screens/User/Create';
//import ListUser from './src/screens/User/ListUser';
import Header from './src/components/header';
import ListAllGames from './src/screens/Games/ListAll';
import { styles } from './styles';	

function App() {
  return (
    <View style={styles.body}>
      <SafeAreaView>
        <Header />
        {/* <ListUser /> */}
        {/* <Login /> */}
        { /*<Create /> */}
        <ListAllGames />
      </SafeAreaView>
    </View>
  );
}

export default App;
