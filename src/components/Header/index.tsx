import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/Logo.png')}
          resizeMode='contain'
        />
    </View>
  )
}
