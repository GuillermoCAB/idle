import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CurrencyProvider } from './src/providers/CurrencyProvider'
import Header from './src/components/Header'
import Header2 from './src/components/Header2'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CurrencyProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Header" component={Header} />
        <Tab.Screen name="Header2" component={Header2} />
      </Tab.Navigator>
    </NavigationContainer>
    </CurrencyProvider>
  )
} 

export default App