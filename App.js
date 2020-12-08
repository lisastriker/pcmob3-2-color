import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from  "@react-navigation/native";
import BlockRBG from "./components/BlockRGB"


function HomeScreen(){
  return(
    <View>
      <BlockRBG red={100} blue={50} green={255}/>
      <BlockRBG red={255} blue={0} green={255}/>
      <BlockRBG red={0} blue={200} green={255}/>
    </View>
  )
}
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
