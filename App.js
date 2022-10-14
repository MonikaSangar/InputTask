//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  Form from  './src/Screens/Form/Form'



// create a component
const App = () => {
  return (
    <View style={styles.container}>
   <Form/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
   
  },
});

//make this component available to the app
export default App;
