import React from 'react';
import { View } from 'react-native';
import Logo_Heading from './Components/Logo_Heading';
import InputFields from './Components/InputFields'
import SignInButton from './Components/SignInButton';


const App = () => {
  return (
    <View >
      <Logo_Heading/>
      <InputFields text={'Enter your Email Id'}/>
      <InputFields text={'Enter your Password'}/>
      <SignInButton/>
    </View>
  )
}

export default App;