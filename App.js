// import React, { useState, useEffect } from "react";
// import { Button, Text, View, SafeAreaView, ScrollView, FlatList } from "react-native";


// function App() {
//   const [name, setName] = useState('Iphone 13 Pro')

//   const [data, setData] = useState([
//     {_id: 1, name: 'Rahul',
//      age: 46, 
//      arry: [1, 22, 5] }, 
//     {
//       _id:2, 
//      name: 'Ramesh' }])


//   useEffect(() => {
//     alert('hey')//componentdidMounbt
//     return () => {
//       alert("bye")//componedWillUnmount
//     }
//   }, [name]) //componeDidUpdate


//   const renderItem = ({index, item}) =>{
//     return(
//       <View style={{ flex: 1 }}>
//       <Text style={{ marginVertical: 16 }}>{item?.name} {item?.age}</Text>

//       {!!item?.arry ? <View>
//         {item.arry.map((value, i) => {
//           return (<Text key={String(i)} >{value}</Text>)
//         })}
//       </View> : null}
//     </View>
//     )
//   }

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* <ScrollView showsVerticalScrollIndicator={false}> */}


//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => String(item._id)}
//       />


//       {/* {data.map((val, index) => {
//           return (
//             <View style={{ flex: 1 }}>
//               <Text style={{ marginVertical: 16 }}>{val?.name} {val?.age}</Text>

//               {!!val?.arry ? <View>
//                 {val.arry.map((value, i) => {
//                   return (<Text>{value}</Text>)
//                 })}
//               </View> : null}
//             </View>
//           )
//         })} */}



//       <Button title="Update Value" onPress={() => setName('iphone 14 pro')} />
//       {/* </ScrollView> */}
//     </SafeAreaView>
//   )
// }

// export default App



//import liraries
import { NavigationContainer } from '@react-navigation/native';
import React, { Component, useState,useEffect } from 'react';
import { View, Text, StyleSheet,SafeAreaView ,FlatList,Button, TouchableOpacity} from 'react-native';

// create a component
const App = () => {
  const [name, setName] = useState('Good Morning')
  const [data,setData]=useState([
    {
      id:1,
      name:'Isha'
    },
    {
      id:2,
      name:'Reetika'
    },
    {
      id:3,
      name:'Amandeep'
    }
  ])
    useEffect(() => {
    alert('hey')
    return () => {
      alert("Good Morning")
    }
  }, [name]) //componeDidUpdate
  const renderItem=({item,value})=>{
    return(
      <View style={{marginTop:16,marginHorizontal:24}}>
    <Text>my name is {item?.name}</Text>
    </View>
  )}
  return (
    <SafeAreaView style={{flex:1,marginHorizontal:24}}>
      <FlatList style={{flex:2}}
      data={data}
      renderItem={renderItem}></FlatList>
      <View style={{justifyContent:'flex-start',flex:1}}>
      <Text style={{textAlign:'center',marginBottom:14}}>{name}</Text>
     
         <TouchableOpacity onPress={()=>setName('good evening')}
         style={{backgroundColor:'green',height:48,borderRadius:24,justifyContent:'center',alignItems:'center'}}>
          <Text>click</Text>
         </TouchableOpacity>
  </View>
   
    </SafeAreaView>
  );
};


//make this component available to the app
export default App;
