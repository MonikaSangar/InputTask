
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

import styles from './Home/styles';

// create a component
class Home extends Component {
  constructor(props) {
    console.log("constructor 1")
    super(props)
    this.state = {
      name: 'React-Native',
     
    }
  }

  // componentDidMount() {
  //   console.log("componentDidMount... 3")

  // }

  // shouldComponentUpdate(prevProps, prevState) {
  //   console.log("shouldComponentUpdate 4",)
  //   if (prevState.name === this.state.name) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  // componentDidUpdate() {
  //   console.log("component did update 6",)
  // }

  // componentWillUnmount() {

  // }

  // componentDidCatch() {

  // }

  render() {
    console.log("render... 2/5")
    return (
           <View style={styles.container}>
        <View style={styles.icon}>
          <Image
            style={styles.stretch}
            source={require('../../assets/images/pngtree-vector-back-icon-png-image_931209.jpg')} />
          <Image
            source={{ uri: 'https://toppng.com/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png' }}
            style={styles.imageStyle} />

          <Image
            style={styles.edit}
            source={require('../../assets/images/download.png')} />
        </View>

        
      <View style={{justifyContent:'center', alignItems:'center',flex:1}}>
        <Text style={styles.txt}>{this.state.name}</Text>
        </View>

        <TouchableOpacity style={styles.btn}
        onPress={() => this.setState({ name: 'Hello World' })}>
          <Text  style={styles.click}>Click Me</Text>
        </TouchableOpacity>



      </View>
    )
  }
}



export default Home