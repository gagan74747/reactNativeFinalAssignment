import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Products'>
      <Stack.Screen name="Products" component={ProductsScreen} options={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#0775CE' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
      }} />
      <Stack.Screen name="ProductDetails" component={ProductDetailScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#0775CE' },
          headerTintColor: 'white'
        }}
      />
    </Stack.Navigator>
  )
}
