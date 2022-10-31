// //import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
// import TextInputComp from '../../Components/TextInputComp';
// import styles from './styles';
// import imagesPath from '../../constants/imagePath'

// // create a component
// class Form extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {


//             firstName: '',
//             lastName: '',
//             age: '',
//             email: ''
//         }
//     }
//     validates = () => {
//         const { lastName, firstName, age, email } = this.state

//         // if (email==''||firstName== ''||lastName== ''||age==''){
//         //     alert("fill all the fields")
//         // }
//         if (firstName == '') {
//             alert('Enter First Name')
//             return
//         }


//         if (lastName == '') {
//             alert('Enter Last Name')
//             return
//         }


//         if (age == '') {
//             alert('Enter Age')
//             return
//         }
//         if (email == '') {
//             alert('Enter Email')
//             return
//         }
//         else {
//             alert(firstName + "\n" + lastName + "\n" + age + "\n" + email)
//         }
//     }
//     render() {
//         const { lastName, firstName, age, email } = this.state

//         return (
//             <View style={styles.container}>
//                 <View style={styles.topBar}>
//                     <View style={{flex:0.5,}}>
//                     <Image style={{ width: 24, height: 24 }} source={imagesPath.icBack} />
//                     </View>
//                     <View style={{flex:0.6,}}>
//                     <Text>home</Text>
//                     </View>
                  

//                 </View>

//                 <View style={{ borderWidth: 1, borderColor: 'black', marginBottom: 32 }} />

//                 <View>
//                     <TextInputComp
//                         placeholder='Enter you FirstName'
//                         value={firstName}
//                         onChangeText={firstName => this.setState({ firstName })}

//                         textInputStyle={{ backgroundColor: '#37c871' }} />
//                     <TextInputComp
//                         placeholder='Enter you LastName'
//                         value={lastName}
//                         onChangeText={lastName => this.setState({ lastName })}


//                         textInputStyle={{ backgroundColor: '#F69E1D' }} />
//                     <TextInputComp
//                         placeholder='Enter your Age'
//                         value={age}
//                         onChangeText={age => this.setState({ age })}
//                         keyboardType='numeric'

//                         textInputStyle={{ backgroundColor: '#f69e' }} />

//                     <TextInputComp
//                         placeholder='Enter you Email'
//                         keyboardType='email-address'
//                         value={email}
//                         onChangeText={email => this.setState({ email })}
//                         textInputStyle={{ backgroundColor: '#288BA8' }} />
//                 </View>
//                 <View style={styles.btn}>
//                     {/* <TouchableOpacity onPress={()=>alert(email + "\n" + firstName + "\n"+lastName+"\n"+age)} */}
//                     <TouchableOpacity onPress={this.validates}
//                         style={styles.bottom}>
//                         <Text style={styles.txtColor}>Done</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>


//         );
//     }
// }



// //make this component available to the app
// export default Form;
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Profile from '../Profile/Profile';


// create a component
const Form = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Form</Text>
           <Button onPress={() => navigation.navigate('Profile')}
            title='click me'></Button>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Form;
