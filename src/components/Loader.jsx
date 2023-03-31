import { StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'

export default function Loader() {
 return (
  <View style={styles.container}>
   <ActivityIndicator size='large' color='white' />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor:'#aaaa',
  justifyContent: 'center',
  alignItems: 'center'
 }
})