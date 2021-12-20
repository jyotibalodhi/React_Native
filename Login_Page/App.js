import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo_Heading from './Components/Logo_Heading';


const App = () => {
  return (
    <View style={styles.container}>
      <Logo_Heading/>
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    backgroundGradient: "vertical",
    backgroundGradientTop: "#fff",
    backgroundGradientBottom: "#b9919e"
  },
})

export default App;