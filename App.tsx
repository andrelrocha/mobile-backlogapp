import React from 'react';
import { SafeAreaView, View } from 'react-native';
//import Home from './src/screens/Home';
//import Login from './src/screens/User/Login';
import Create from './src/screens/User/Create';
import { styles } from './styles';	

function App() {
  return (
    <View style={styles.body}>
      <SafeAreaView>
        {/* <Home /> */}
        {/* <Login /> */}
        <Create />
      </SafeAreaView>
    </View>
  );
}

export default App;
