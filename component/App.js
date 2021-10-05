import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from "../styles/app"

export default function App() {
  return (
    <View style={style.container}>
        <Text>Open up App.js to start working on your app pwet!</Text>
        <StatusBar hidden={true} />
    </View>
  );
}

