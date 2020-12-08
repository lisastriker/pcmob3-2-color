import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BlockRBG(props){
    return(
        <View style={{
                backgroundColor: `rgb(${props.red}, ${props.green}, ${props.blue})`,
                padding: 30,
                width:"100%",
            }}>
        </View>
    )
}