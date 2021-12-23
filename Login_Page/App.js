import React from 'react';
import { View } from 'react-native';
import Logo_Heading from './Components/Logo_Heading';
import Password from './Components/Password';
import SignInButton from './Components/SignInButton';
import EmailId from './Components/EmailId';


const App = () => {
  return (
    <View >
      <Logo_Heading/>
      <EmailId />
      {/* <InputFields text={'Enter your Email Id'}/> */}
      <Password/>
      <SignInButton/>
    </View>
  )
}

export default App;