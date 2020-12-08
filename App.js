import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from  "@react-navigation/native";
import BlockRGB from "./components/BlockRGB"
import { FlatList } from 'react-native-gesture-handler';
import { greaterThan } from 'react-native-reanimated';

 const COLORS = [
   { red: 255, green: 128, blue: 0, id: "0" },
   { red: 0, green: 128, blue: 255, id: "1" },
   { red: 128, green: 0, blue: 255, id: "2" },
   { red:0, green:0, blue:0, id:"3"}
 ];

function HomeScreen({navigation}){
   const [colorArray, setColorArray] = useState(COLORS);
   function renderItems({item}){ //onPress takes function name not function call. If you put function,it will straight away call even before press
    return <TouchableOpacity onPress={()=>navigation.navigate('Detail', {...item})}> 
      <BlockRGB red={item.red} green={item.green} blue={item.blue}/>
      </TouchableOpacity>;
  } //()=>navigation.navigate is the name of an anonymous function. //{red:item.red, green:item.green, blue:item.blue} = ...item

  useEffect(()=>{
    navigation.setOptions({
      headerRight:() => <Button onPress={addColor} title="Add Color"></Button>,
      headerLeft:()=> <Button onPress={resetColor} title="Reset Color"></Button>
    });
  });
  //Use effect is if you want to change things depending on state update or u want a button or something outside of screen.
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
      <FlatList style={{width:"100%"}} data={colorArray} renderItem={renderItems}/>
      </View>
  );
}

function DetailScreen({route}){ // style={[styles.container,{color:blue}]} for 2 styles
  const {red,green,blue} = route.params
  const total = red+green+blue
return <View style={[styles.container, {backgroundColor: `rgb(${red},${green},${blue})`}]}> 
  <Text style={total<350 ? styles.detailTextLight : styles.detailText}>red: {red}</Text>
  <Text style={total<350 ? styles.detailTextLight : styles.detailText}>green: {green}</Text>
  <Text style={total<350 ? styles.detailTextLight : styles.detailText}>blue: {blue}</Text>
  </View>
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen}></Stack.Screen>
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
  detailText:{
    fontSize:40,
    color:"black"
  },
  detailTextLight:{
    color:"white",
    fontSize:40,
  }
});
