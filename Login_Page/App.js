import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo_Heading from './Components/Logo_Heading';
import EmailId from './Components/EmailId'
import Password from './Components/Password'
import SignInButton from './Components/SignInButton';


const App = () => {
  return (
    <View >
      <Logo_Heading/>
      <EmailId/>
      <Password/>
      <SignInButton/>
    </View>
  )
}

export default App;