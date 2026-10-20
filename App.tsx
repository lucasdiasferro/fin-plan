import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home } from './src/screens/Home';
import { Planner } from './src/screens/Planner';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name='Home' component={Home}/>

        <Stack.Screen name='Planner' component={Planner}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
