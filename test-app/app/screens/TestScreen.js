import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, View, Button, Alert} from 'react-native';
import ServiceDisplayComponent from '../components/ServiceDisplayComponent';

function TestScreen(props) {
    return (        
            <ServiceDisplayComponent />        
    );
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: "lightgreen",        
        justifyContent:"space-evenly",
        width:"100%",
        height:"100%"
    }
  });

export default TestScreen;