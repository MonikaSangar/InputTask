import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Form from "../Screens/Form/Form";
import Profile from "../Screens/Profile/Profile";
import NavigationContainer from '@react-navigation/native';
  
  const Stack = createNativeStackNavigator();
  
  function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
    headerShown: false}}
  >
          <Stack.Screen name="Form" component={Form} />
          <Stack.Screen name="Profile" component={Profile} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;

//import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // create a component
// const Routes = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Routes</Text>
//         </View>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default Routes;
