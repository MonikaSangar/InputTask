//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';

// create a component
class Register extends Component {
    render() {
        return (
            <SafeAreaView style={{flexHor:1}}>
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'pink',flex:1}}>
                <Text>Register</Text>
                <Text>Home</Text>
                </View>
                <View>
                    <Text>Monika</Text>
                </View>
            </View>
            </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal:24,
        marginVertical:14,
        flex:1

     
    },
});

//make this component available to the app
export default Register;
