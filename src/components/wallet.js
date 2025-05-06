import React from 'react'
import { View,Text,SafeAreaView } from 'react-native'
import tailwind from 'twrnc'

function Wallet() {
    const tw=tailwind
  return (
     <SafeAreaView style={{ height: '100%', backgroundColor: 'white', borderTopLeftRadius: 30, paddingTop: 0, borderTopRightRadius: 30 }}>
    
          <View style={[{ flex: 1 }, tw`pl-10 pr-10 pt-4 flex gap-2 flex flex-col justify-center items-center`]}>
    
    
                <Text style={tw``}>Wallet</Text>
            
    
    
          
          </View>
    
    
          
    
        </SafeAreaView>
  )
}

export default Wallet