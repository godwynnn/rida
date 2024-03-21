import React, { useEffect } from 'react'
import { Text, View,StyleSheet, SafeAreaView,StatusBar,FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { SelectAccessToken,SelectRefreshToken,SelectLoggedInStatus } from '../reducer/reducer'
import tailwind from 'twrnc'
import { TextInput } from 'react-native-paper'
import Events from '../components/events'
import {GOOGLE_API_KEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



export default function IndexView() {
  let u_data=useSelector(async (state)=>await state.authreducer)
  const stored_data= u_data
  console.log('STORED_DATA',stored_data)
  const tw=tailwind
  // console.log(GOOGLE_API_KEY)
  


  useEffect(()=>{
    console.log('STORED_DATA',stored_data)
  },[])
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={tw`bg-[#120719] flex-0.7   p-2 `}>

          <GooglePlacesAutocomplete
          placeholder='Where are you going to?'
          // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
          // currentLocationLabel="Current location"
          nearbyPlacesAPI='GooglePlacesSearch'
          listViewDisplayed={true}
          fetchDetails={true}

          styles={{
            textInput:{fontSize:15},
            container:{flex:0},
            textInputContainer:{marginTop:50}
          }}
          minLength={1}
          debounce={200} 
          query={{
            key: GOOGLE_API_KEY,
            language: 'en', 
  
          }}
          />

      <GooglePlacesAutocomplete
                placeholder='Where are you going to?'
                // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                // currentLocationLabel="Current location"
                nearbyPlacesAPI='GooglePlacesSearch'
                listViewDisplayed={true}
                fetchDetails={true}
                styles={{
                  textInput:{fontSize:15},
                  container:{flex:1},
                  textInputContainer:{marginTop:5,padding:1}
                }}
                
                minLength={1}
                debounce={200} 
                query={{
                  key: {GOOGLE_API_KEY},
                  language: 'en', 
        
                }}
              
                />
       
        </View>

        
            <Events/>
       
    </SafeAreaView>
  )
}

styles=StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    paddingTop: Platform.OS==='android'? StatusBar.currentHeight : '0',
    justifyContent:'center',


  },
  sub_container:{
    flex:0.8,
  }
})

