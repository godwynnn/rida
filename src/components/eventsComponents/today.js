import React from 'react'
import { View,SafeAreaView,Text,FlatList, TouchableOpacity,Image, StyleSheet,Dimensions } from 'react-native'
import tailwind from 'twrnc'
// import { Image } from 'react-native'
import img1 from '../../../assets/ft1.png'

const {width,height}=Dimensions.get('window')
const feature_data=[
  {
    title:'ride',
    image: require('../../../assets/ft1.png'),
    id:0
  },
  {
    title: 'resturant',
    image: require('../../../assets/ft2.png'),
    id:1
  },

  {
    title: 'shopping',
    image: require('../../../assets/ft3.png'),
    id:2
  }
]
export default function Today() {
  const tw=tailwind
  return (
    <SafeAreaView style={styles.container}>

    
    <FlatList
    data={feature_data}

    keyExtractor={(item,index)=>item.id}
    renderItem={({item})=>{
      console.log(item),
      <TouchableOpacity  >
        <View >
            
          <Text style={{color:'black', fontSize:20}}>{item.title}</Text>

    
        </View>
       
    

       
      </TouchableOpacity>
    }}
    />

</SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
   
    // backgroundColor:'black',
    flex:1,
    width:width,
    height:width*0.9,
  },
  image:{
    width:'100%',
    height:'100%'
  }
})
