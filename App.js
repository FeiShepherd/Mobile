import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SideMenu from './components/SideMenu/index.js';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function App() {
  
  return (
    <NavigationContainer >
      <SideMenu />
    </NavigationContainer>
      
  );
}

