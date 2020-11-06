import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from 'react-native';

function ServiceElementComponent(props) {
    return (
       <View style={styles.itemContainer}>
           <TouchableOpacity onPress={()=>{Alert.alert("Opted for "+props.title)}}>
                <Image source={require('../assets/icons/service-icon.png')}
                    style={styles.icon} />
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>           
       </View>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        width:150,
        height: 150,        
        alignSelf:"flex-start",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    icon:{
        width:100,
        height:100
    },
    text:{        
        color: "darkblue",
        justifyContent: "center",
        alignSelf: "center"
    }
})

export default ServiceElementComponent;