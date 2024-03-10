import React, { useEffect } from 'react'
import { Text, View,StyleSheet,FlatList, SafeAreaView,StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import { SelectAccessToken,SelectRefreshToken,SelectLoggedInStatus } from '../reducer/reducer'
import tailwind from 'twrnc'
import { TextInput } from 'react-native-paper'
import Events from '../components/events'


export default function IndexView() {
  let u_data=useSelector((state)=>state.authreducer)
  const stored_data= u_data
  console.log('STORED_DATA',stored_data)
  const tw=tailwind
  


  useEffect(()=>{
    console.log('STORED_DATA',stored_data)
  },[])
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={tw`bg-[#1D1A38] flex-0.45  justify-center p-2 `}>
            <TextInput placeholder='Where are you going to?' style={tw`m-2 rounded-1 opacity-80 border-0`}/>
            <TextInput placeholder='Where are you going to?' style={tw`m-2 rounded-1 opacity-80 border-0`}/>
        </View>

        
            <Events/>
       
    </SafeAreaView>
  )
}

styles=StyleSheet.create({
  container:{
    // backgroundColor:'g',
    flex:1,
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight : '0',


  },
  sub_container:{
    flex:0.8,
  }
})

