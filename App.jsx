import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from './src/services/rootReducer';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/components/StackNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})