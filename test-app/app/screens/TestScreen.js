import React from 'react';
import { StyleSheet, Text, SafeAreaView, Platform, View, Button, Alert} from 'react-native';

function TestScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text>Sample Text</Text>
            <Button style={styles.button}
                title="Click me"
                onPress={() => Alert.alert('Button clicked!')}
            />
            </View>            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button : {
        backgroundColor: 'red',
        paddingTop: 10
    }
  });

export default TestScreen;