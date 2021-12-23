import React, { useState } from 'react';
import { View, StyleSheet, TextInput} from 'react-native';

export default function Password(){
    const[password, setPass] = useState('');
    return (
      <View style={fieldStyles.inputView}>
        <TextInput
          secureTextEntry={true}
          style={fieldStyles.inputText}
          value={password}
          placeholder='Enter your password'
          onChangeText={(password) => setPass({ password })}
        />
          
      </View>
    );
}


const fieldStyles = StyleSheet.create({
    inputView:{
        width:"80%",
        backgroundColor:"#e9d0de",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20,
        flexDirection:'column',
        alignSelf:'center'
      }
    ,
      inputText:{
        height:50,
        color:"black",
      }
    })
