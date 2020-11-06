import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TestScreen from './app/screens/TestScreen';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <TestScreen></TestScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {    
    width: "100%",
    height: "100%"
  },
});
