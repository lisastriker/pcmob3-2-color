import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer,} from  "@react-naigation/native"
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stack = createStackNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
