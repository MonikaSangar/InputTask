//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import TextInputComp from '../../Components/TextInputComp';
import styles from './styles';

// create a component
class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            name: 'React-Native',
               inputText: '' 
        }
    }
    render() {
    const {name, inputText} = this.state

        return (
            <View style={styles.container}>
                <View style={styles.topBar}>
                    <Text>back</Text>
                    <Text>home</Text>
                </View>

                <View>
                    <TextInputComp
                        placeholder='Enter you FirstName'
                       
                        textInputStyle={{ backgroundColor: '#37c871' }} />
                    <TextInputComp
                        placeholder='Enter you LastName'
                       

                        textInputStyle={{ backgroundColor: '#F69E1D' }} />
                    <TextInputComp
                        placeholder='Enter your Age'
                        keyboardType='numeric'

                        textInputStyle={{ backgroundColor: '#f69e' }} />
                    <TextInputComp
                        placeholder='Enter you Email'
                        keyboardType='email'
                        textInputStyle={{ backgroundColor: '#814FA0' }} />
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={()=>alert('ahaan')}
                    style={styles.bottom}>
                        <Text style={styles.txtColor}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
           
        
        );
    }
}



//make this component available to the app
export default Form;
