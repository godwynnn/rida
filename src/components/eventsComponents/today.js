import React from 'react'
import { View,SafeAreaView,Text,FlatList, TouchableOpacity,Image, StyleSheet,Dimensions } from 'react-native'
import tailwind from 'twrnc'
// import { Image } from 'react-native'
import img1 from '../../../assets/ft1.png'

const {width,height}=Dimensions.get('window')
const feature_data=[
  {
    title:'Ride',
    image: require('../../../assets/ft1.png'),
    id:0
  },
  // {
  //   title: 'resturant',
  //   image: require('../../../assets/ft2.png'),
  //   id:1
  // },

  {
    title: 'Delivery',
    image: require('../../../assets/ft3.png'),
    id:2
  },

]
export default function Today() {
  const tw=tailwind
  return (
    // <SafeAreaView style={styles.container}>

    
    <FlatList
    data={feature_data}
    contentContainerStyle={styles.container}
    

    keyExtractor={(item,index)=>item.id}
    renderItem={({item})=>{
      return (<TouchableOpacity  >
        <View style={{width:150,height:200, backgroundColor:'whitesmoke',margin:4,
         justifyContent:'center',alignItems:'center'}} >
            
          <Image source={item.image} style={{width:70,height:70}}/>
          <Text style={{fontSize:15, marginTop:10}}>{item.title}</Text>

    
        </View>
       
    

       
      </TouchableOpacity>)
    }}
    />

// </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container:{
   
    backgroundColor:'white',
    flex:1,
    width:width,
    height:width*0.9,
    paddingTop:'5%',
    justifyContent:'center',
    flexWrap:'wrap',
    alignContent:'flex-start',
    flexDirection:'row'
    
  },
  image:{
    width:'20%',
    height:'20%'
  }
})
