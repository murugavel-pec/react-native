import React from 'react';
import { Image, View, StyleSheet, Platform } from 'react-native';
import ServiceElementComponent from './ServiceElementComponent';

function ServiceDisplayComponent(props) {
    return (
        <View style={styles.displayContainer}> 
            <ServiceElementComponent title="Haircut at Home"/>
            <ServiceElementComponent title="Salon at Home"/>
            <ServiceElementComponent title="Appliance Repair"/>
            <ServiceElementComponent title="Painters"/>
            <ServiceElementComponent title="Electricians"/>
            <ServiceElementComponent title="carpenters"/>
            <ServiceElementComponent title="Massage for Men"/>
            <ServiceElementComponent title="Pest Control"/>         
        </View>
    );
}

const styles = StyleSheet.create({
    displayContainer: {         
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignContent:"center",
        flexGrow:1,
        top: 10,
        bottom: 100,
        height: "100%"
    }
  });

export default ServiceDisplayComponent;