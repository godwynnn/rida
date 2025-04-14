import React, { useState } from 'react'
import { GOOGLE_API_KEY } from '@env'
import tailwind from 'twrnc'
import { useDispatch } from 'react-redux'
import { View,Text, Pressable } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { LocationAction } from '../reducer/reducer'
import { Url } from '../urls'
import { useSelector } from 'react-redux'
import { selectTripData } from '../reducer/reducer'
import { Button } from 'react-native-paper'


const urls=Url()
function Destination({navigation}) {
    const LocationData = useSelector(selectTripData)
    const tw = tailwind
    const dispatch=useDispatch()
    const [priceData,setPriceData]=useState({})

    const GetPriceData=(destination)=>{
            fetch(urls.priceData, {
              method:'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({'origin':LocationData.origin.origin,'destination': destination})
            } ).then(res => res.json()
            ).then(data =>{
              if(data.success === true){
                navigation.navigate('bookRide',{
                  params:data.data
                })
              }
            console.log(data)
            })
        
    }

    

    return (
        <>

            <View style={tw`flex justify-center items-center bg-white`}>
                <Text style={tw`font-bold text-[30px]`}>Destination</Text>
            </View>

            <View style={[{ flex: 1,justifyContent:'space-between' }, tw`p-4 bg-white`]}>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going to?'
                    // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    // currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch'
                    listViewDisplayed={true}
                    fetchDetails={true}

                    styles={{
                        textInput: { fontSize: 15, height: '100%', borderColor: 'black', borderWidth: 0, backgroundColor:'#ECEEE9' },
                        container: { flex: 0 },
                        textInputContainer: { marginTop: 20, height: 50, zIndex: 100}
                    }}
                    minLength={1}
                    debounce={400}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',

                    }}
                    // enablePoweredByContainer={false}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        // console.log( details);
                        dispatch(LocationAction.setDestination({
                            'destination': details.geometry.location,
                            'destination_desc': data.description
                        }));
                        GetPriceData(details.geometry.location)
                        // navigation.navigate('bookRide')
                    
                    }} 
                    enablePoweredByContainer={false}



                />


                <View style={[tw`flex flex-row `,{justifyContent:'space-around'}]} >
                  
                  <Button labelStyle={{color:'white'}} onPress={()=>navigation.navigate('index')}
                   icon={'keyboard-backspace'} style={[tw `bg-[#24272B] p-2 px-4 rounded-[10px]`]}>
                    <Text>Go Back</Text></Button>

                  <Button labelStyle={{color:'white'}} icon={'clock-time-eleven-outline'} style={tw `bg-[#24272B] p-2 px-4 rounded-[10px]`}><Text>Events</Text></Button>

                </View>

                
            </View>

        </>
    )
}

export default Destination