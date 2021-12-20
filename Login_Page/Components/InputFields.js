import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'


const EmailId = ({text})=> {
    return (
        <View style= {fieldStyles.inputView} >
          <TextInput  
            style={fieldStyles.inputText}
            placeholder={text}
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


// state={
//   email:"",
//   password:""
// }


export default EmailId