import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from  "@react-navigation/native";
import BlockRGB from "./components/BlockRGB"
import { FlatList } from 'react-native-gesture-handler';

 const COLORS = [
   { red: 255, green: 128, blue: 0, id: "0" },
   { red: 0, green: 128, blue: 255, id: "1" },
   { red: 128, green: 0, blue: 255, id: "2" },
   { red:0, green:0, blue:0, id:"3"}
 ];

function HomeScreen(){
   const [colorArray, setColorArray] = useState(COLORS);
   function renderItems({item}){
    return <BlockRGB red={item.red} green={item.green} blue={item.blue}/>;
  }

  function addColor() {
    let newColor = {
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
      id: colorArray.length.toString(),
    };
    setColorArray([...colorArray, newColor]);
  }

  function resetColor(){
    setColorArray([]);
  }

  return(
    <View style={styles.container}>
       <TouchableOpacity
        style={{ height: 40, justifyContent: "center" }}
        onPress={addColor}>
        <Text>Add Colour</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ height: 40, justifyContent: "center" }}
        onPress={resetColor}>
        <Text>Reset Colour</Text>
      </TouchableOpacity>
      <FlatList style={{width:"100%"}} data={colorArray} renderItem={renderItems}/>
      </View>
  );
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
