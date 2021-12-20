import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const Logo_Heading = () => {
    return (
        <View>
            <Image
        style={logoStyles.tinyLogo}
        source={
            require('../Components/vimient.png')
        }
      />
        </View>
    )
}


const logoStyles =StyleSheet.create({
    tinyLogo:{ 
        display: 'flex',
        alignSelf:'center',
        marginTop:70,
    },
  })

export default Logo_Heading
