import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from './src/components/Header'
import Header2 from './src/components/Header2'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Header" component={Header} />
        <Tab.Screen name="Header2" component={Header} />
      </Tab.Navigator>
    </NavigationContainer>
  )
} 

export default App