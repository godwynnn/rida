import React from 'react'
import { GOOGLE_API_KEY } from '@env'
import tailwind from 'twrnc'
import { useDispatch } from 'react-redux'
import { View,Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { LocationAction } from '../reducer/reducer'



function Destination({navigation}) {
    const tw = tailwind
    const dispatch=useDispatch()

    return (
        <>

            <View style={tw`flex flex-col justify-center items-center bg-white`}>
                <Text style={tw`font-bold text-[30px]`}>Destination</Text>
            </View>

            <View style={[{ flex: 1 }, tw`p-4 bg-white`]}>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going to?'
                    // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                    // currentLocationLabel="Current location"
                    nearbyPlacesAPI='GooglePlacesSearch'
                    listViewDisplayed={true}
                    fetchDetails={true}

                    styles={{
                        textInput: { fontSize: 15, height: '100%', borderColor: 'black', borderWidth: 2 },
                        container: { flex: 0 },
                        textInputContainer: { marginTop: 20, height: 50, zIndex: 100 }
                    }}
                    minLength={1}
                    debounce={400}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: 'en',

                    }}
                    // enablePoweredByContainer={false}
                    onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                        dispatch(LocationAction.setDestination({
                            'destination': details.geometry.location,
                            'destination_desc': data.description
                        }));
                        navigation.navigate('bookRide')
                    }}
                    enablePoweredByContainer={false}



                />

            </View>

        </>
    )
}

export default Destination