import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const EmailId = ()=> {
    return (
      
        <View style= {fieldStyles.inputView} >
          <TextInput  
            style={fieldStyles.inputText}
            placeholder='Enter your Email id'
            placeholderTextColor="#003f5c"
            // onChangeText={text => this.setState({email:text})}
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



export default EmailId