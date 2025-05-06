import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, Text, FlatList, TouchableOpacity, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import tailwind from 'twrnc'
// import { Image } from 'react-native'
import img1 from '../../../assets/ft1.png'

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from '@expo/vector-icons'
import { Input } from '../../../~/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../~/components/ui/card';

const { width, height } = Dimensions.get('window')
const feature_data = [
  {
    title: 'Ride',
    image: require('../../../assets/ft1.png'),
    id: 0
  },
  // {
  //   title: 'resturant',
  //   image: require('../../../assets/ft2.png'),
  //   id:1
  // },

  {
    title: 'Delivery',
    // image: require('../../../assets/ft3.png'),
    id: 2
  },

]


const intervals = [
  { label: 'minutes', value: 'm' },
  { label: 'days', value: 'd' },
  { label: 'weeks', value: 'w' },
]


const Event_data=[
  {
    title:'The Experience',
    time:'5.00pm',
    image:'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count:'25 joined'
  },
  {
    title:'The Conclave\'s',
    time:'5.00pm',
    image:'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count:'25 joined'
  },
  {
    title:'Billionaires path',
    time:'5.00pm',
    image:'https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count:'25 joined'
  },
  {
    title:'Prospects',
    time:'5.00pm',
    image:'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count:'25 joined'
  },
  {
    title:'TechNova',
    time:'5.00pm',
    image:'https://images.pexels.com/photos/2608512/pexels-photo-2608512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count:'25 joined'
  }
]
export default function Events() {

  const [selectedItems, setSelectedItems] = useState([]);
  const tw = tailwind
  const { width, height } = Dimensions.get('screen')
  return (
    <SafeAreaView style={{ height: '100%', backgroundColor: 'white', borderTopLeftRadius: 30, paddingTop: 0, borderTopRightRadius: 30 }}>

      <ScrollView style={[{ height: '100%' }, tw`p-4 px-5`]}>

        <View style={{
          width: width, height: height / 10, display: 'flex',
          flexDirection: 'row', gap:100, 
        }}>

          <View >
            <Text style={tw`text-[17px] font-bold`}>Tuesday,05 May</Text>
            <Text style={tw` text-[13px]`}><Ionicons name={'location'} color={'#1D1A38'} /> Rumuola, Portharcourt</Text>
          </View>


          <Image 
          
          style={{width:50,height:50, borderRadius:50}}
          source={{uri:'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>

        </View>




        <View style={{ width: width, height: height / 10, display:'flex',flexDirection:'row',gap:4 }}>


          <View style={{
            height: '70%', width: '70%', backgroundColor: 'whitesmoke',
            paddingHorizontal: 5,display:'flex', flexDirection:'row', alignItems:'center',gap:10,
            borderRadius:10
          }}>
            <Ionicons name={'search'} size={20} color={'#1D1A38'} /> 

            <Input
              placeholder='Search for events?'
              // value={value}
              // onChangeText={onChangeText}
              aria-labelledby='inputLabel'
              aria-errormessage='inputError'
              style={{backgroundColor:'transparent',height: '100%', width: '80%', borderWidth:0}}


            />

          </View>

          <TouchableOpacity style={{height:'70%',width:'18%', backgroundColor:'whitesmoke',
            display:'flex',justifyContent:'center', alignItems:'center', borderRadius:10
          }}>
          <Ionicons name={'filter'} size={20} color={'#1D1A38'} /> 
          </TouchableOpacity>

        </View>

      <Text style={tw`text-[#1D1A38] p-2 text-[16px] font-bold`}>Nearby Events</Text>
      <View style={{height:height/3.4,paddingVertical:4}} >


      <FlatList
        data={Event_data}
        style={{height:'100%',}}
        contentContainerStyle={{gap:10}}
        keyExtractor={(item, index)=>index}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
        
        renderItem={({item})=>{
         return (<TouchableOpacity style={[tw` bg-[whitesmoke] p-1  relative`,{borderRadius:10,  height:'100%', }]}>
        <Image 
        style={{width:'100%',height:'65%',borderRadius:10}} 
        source={{uri:item.image}}
        />
          <CardTitle style={
            [tw`text-[#1D1A38] p-2 text-[12px] font-bold`,
            {width:'100%',  }
          ]}
          >{item.title}     <Text>5:00pm</Text></CardTitle>
          <CardTitle style={
            [tw`text-[#1D1A38] p-2 text-[12px] `,
            {width:'100%',  }
          ]}
          >25 joined</CardTitle>
         
        
            </TouchableOpacity>)
        }}
      />
      
      
      </View>





      <Text style={tw`text-[#1D1A38] p-2 text-[16px] font-bold`}>Trendings</Text>

      <View style={{height:height/3.4,paddingVertical:4}} >


<FlatList
  data={Event_data}
  style={{height:'100%',}}
  contentContainerStyle={{gap:0}}
  keyExtractor={(item, index)=>index}
  horizontal
  scrollEnabled
  showsHorizontalScrollIndicator={false}
  legacyImplementation={false}
  
  
  renderItem={({item})=>{
   return (
   <TouchableOpacity style={[tw` bg-[whitesmoke] p-1  relative`,{borderRadius:10,  height:'100%', }]}>
  <Image 
  style={{width:'100%',height:'65%',borderRadius:10}} 
  source={{uri:item.image}}
  />
    <CardTitle style={
      [tw`text-[#1D1A38] p-2 text-[12px] font-bold`,
      {width:'100%',  }
    ]}
    >{item.title}     <Text>5:00pm</Text></CardTitle>
    <CardTitle style={
      [tw`text-[#1D1A38] p-2 text-[12px] `,
      {width:'100%',  }
    ]}
    >25 joined</CardTitle>
   
  
      </TouchableOpacity>)
  }}
/>


</View>





      </ScrollView>




    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    flex: 1,
    width: width,
    height: width * 0.9,
    paddingTop: '5%',
    justifyContent: 'center',
    // flexWrap: 'wrap',
    alignContent: 'flex-start',
    // flexDirection: 'row'

  },
  image: {
    width: '20%',
    height: '20%'
  }
})
