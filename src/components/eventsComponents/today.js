import React,{useEffect,useState} from 'react'
import { View,SafeAreaView,Text,FlatList, TouchableOpacity,Image, StyleSheet,Dimensions } from 'react-native'
import tailwind from 'twrnc'
// import { Image } from 'react-native'
import img1 from '../../../assets/ft1.png'
import { useSelector } from 'react-redux'

import { selectTripData } from '../../reducer/reducer'

const {width,height}=Dimensions.get('window')
const feature_data=[
  {
    title:'Ride',
    image: require('../../../assets/ft1.png'),
    id:0,
    next_screen:'MapScreen',
    service:'RIDE'
  },
  // {
  //   title: 'resturant',
  //   image: require('../../../assets/ft2.png'),
  //   id:1
  // },

  {
    title: 'Delivery',
    image: require('../../../assets/ft3.png'),
    id:2,
    service:'DELIVERY'
  },

]





export default function Today({navigation}) {
  const tw=tailwind
  const LocationData = useSelector(selectTripData)


  const gotoMapScreen=(screen)=>{
    navigation.navigate(screen)

  }


  const setService=(value)=>{
    console.log('SERVICE',value.service)
    gotoMapScreen(value.next_screen)
  }

 
  return (
    // <SafeAreaView style={styles.container}>

    
    <FlatList
    data={feature_data}
    contentContainerStyle={styles.container}
    
    

    keyExtractor={(item,index)=>item.id}
    renderItem={({item})=>{
      return (
      <TouchableOpacity  onPress={()=>setService(item)} disabled={!LocationData.origin }>
        <View style={[{width:150,height:200, backgroundColor:'whitesmoke',margin:4,
         justifyContent:'center',alignItems:'center'}, tw`${!LocationData.origin &&'opacity-20'} `]}
         
         >
            
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
    // flexWrap:'wrap',
    alignContent:'flex-start',
    flexDirection:'row'
    
  },
  image:{
    width:'20%',
    height:'20%'
  }
})
