import React from 'react';
import { SafeAreaView, View } from 'react-native';
//import Home from './src/screens/Home';
import Login from './src/screens/Login';
import { styles } from './styles';	

function App() {
  return (
    <View style={styles.body}>
      <SafeAreaView>
        {/* <Home /> */}
        <Login />
      </SafeAreaView>
    </View>
  );
}

export default App;
