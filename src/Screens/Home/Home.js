
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import ButtonComp from '../../Components/ButtonComp';
import imagePath from '../../constants/imagePath';

import styles from './styles';


// create a component
class Home extends Component {
constructor() {
    super()
    this.state = {
      name: 'React-Native',
      inputText: ''
    }
  }

  render() {
const {name, inputText} = this.state

    return (
           <View style={styles.container}>
        <View style={styles.icon}>
          <Image
            style={styles.stretch}
            source={imagePath.icBack} />
          <Image
            source={{ uri: 'https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png' }}
            style={styles.imageStyle} />

          <Image
            style={styles.edit}
            source={imagePath.icEdit} />
        </View>

        
      <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
        <Text style={styles.txt}>{name}</Text>
        </View>



<TextInput 
value={inputText}
placeholder='Enter your first name'
onChangeText={text => this.setState({inputText:text})}
style={{
  backgroundColor:"grey",
  borderRadius: 8, 
  paddingHorizontal: 8
}}

/>

<TextInput 
value={inputText}
placeholder='Enter your age'
onChangeText={inputText => this.setState({inputText})}
style={{
  backgroundColor:"#FF8CAE",
  borderRadius: 8, 
  paddingHorizontal: 8
}}
keyboardType="numeric"
/>

        <ButtonComp
          btnText="Click me"
          btnStyle={{backgroundColor: 'red', borderRadius: 12}}
          onPress={()=>alert(inputText)}
        />


<ButtonComp
          btnText="Saved"
          btnStyle={{backgroundColor: 'blue', borderRadius: 12}}
          btnTextStyle={{fontWeight: 'bold'}}
          onPress={()=>alert('world')}
        />


      </View>
    )
  }
}



export default Home






//import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// // create a component
// class Home extends Component {
//   constructor(){
//     super()
//     this.state={
//       name:'Monika',
//       adress:'Baddi'
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>My name is{this.state.name}</Text>
//         <Text>am from {this.state.adress}</Text>
//        <TouchableOpacity style={{backgroundColor:'green',height:48,width:'100%',alignItems:'center',justifyContent:'center'}}
//         onPress={()=>this.setState({name:'Amandeep',adress:'nalagardh'})}>

//         <Text style={{color:'white'}}>Click Me</Text>
//        </TouchableOpacity>
//       </View>
//     );
//   }
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',

//     marginHorizontal:24
 
//   },
// });

// //make this component available to the app
// export default Home;

