//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

// create a component
const TextInputComp = ({
    placeholder={},
    textInputStyle,
   keyboardType,
   onChangeText,
   value,
    onPress = () => {}
}) => {
    return (
      
           <TextInput style={{...styles.inputStyle,...textInputStyle}}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                onPress={onPress}
                keyboardType={keyboardType}></TextInput>
       
    );
};

// define your styles
const styles = StyleSheet.create({
   
    inputStyle:{backgroundColor:'grey',borderRadius:8,padding:8,marginBottom:16}
});

//make this component available to the app
export default TextInputComp;
