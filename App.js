import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './Navigation/TabNav';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
      <StatusBar/>
    </NavigationContainer>
  );
}
