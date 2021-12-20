import React from 'react'
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native'

const SignInButton = () => {
    return (
        <View>
        <TouchableOpacity style={btnStyles.loginBtn}>
          <Text style={btnStyles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
    )
}

const btnStyles =StyleSheet.create({
    loginBtn:{
        width:"50%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        paddingTop:'7%',
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
        flexDirection:'column',
        alignSelf:'center'

      },

      loginText:{
        height:50,
        color:"black"
      }
})

export default SignInButton
