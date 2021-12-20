import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const Password = () => {
    return (
        <View style= {fieldStyles.inputView} >
          <TextInput  
              style={fieldStyles.inputText}
              placeholder="Enter your password" 
              placeholderTextColor="#003f5c"
              // onChangeText={text => this.setState({password:text})}
              />  
            </View>
    )
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
        color:"black"
      }
    
    })

export default Password
