import React from 'react'
import { View, Text, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import tailwind from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

function NairaAccount() {
  const tw=tailwind
  return (
    <SafeAreaView style={tw `w-[100%] h-[100%] flex gap-[0] `}>
                {/* <Text style={tw`font-bold text-xl`}>$<Text style={tw`font-normal text-lg`} >Dollar</Text></Text> */}
    
                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', height:50}}>
                    <View>
                        <Text style={[tw`font-bold`,{color:'#dad7cd'}]}>Account Name</Text>
                        <Text style={tw`text-[14px] font-bold`}>Godwin Chibuzor</Text>
                    </View>
    
                    <TouchableOpacity>
                    <Ionicons name={'copy'} size={20} color={'#dad7cd'} />
                    </TouchableOpacity>
                </View>
    

                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', height:50}}>
                    <View>
                        <Text style={[tw`font-bold`,{color:'#dad7cd'}]}>Bank</Text>
                        <Text style={tw`text-[14px] font-bold`}>Wema Bank</Text>
                    </View>
    
                    <TouchableOpacity>
                    <Ionicons name={'copy'} size={20} color={'#dad7cd'} />
                    </TouchableOpacity>
                </View>
    
    
    
    
                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', height:50}}>
                    <View>
                        <Text style={[tw`font-bold`,{color:'#dad7cd'}]}>Account Number</Text>
                        <Text style={tw`text-[14px] font-bold`}>22544869903</Text>
                    </View>
    
                    <TouchableOpacity>
                    <Ionicons name={'copy'} size={20} color={'#dad7cd'} />
                    </TouchableOpacity>
                </View>
    
    
                
              
                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', height:50}}>
                    <View>
                        <Text style={[tw`font-bold`,{color:'#dad7cd'}]}>Expiry</Text>
                        <Text style={tw`text-[14px] font-bold`}>07/26</Text>
                    </View>
    
                    <TouchableOpacity>
                    <Ionicons name={'copy'} size={20} color={'#dad7cd'} />
                    </TouchableOpacity>
                </View>
    
              
    
    
                <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between',alignItems:'center', height:50}}>
                    <View>
                        <Text style={[tw`font-bold`,{color:'#dad7cd'}]}>Cvv</Text>
                        <Text style={tw`text-[14px] font-bold`}>123</Text>
                    </View>
    
                    <TouchableOpacity>
                    <Ionicons name={'copy'} size={20} color={'#dad7cd'} />
                    </TouchableOpacity>
                </View>

                <View style={[tw`mt-5`,{display:'flex',flexDirection:'row', justifyContent:'space-evenly',alignItems:'center', height:50}]}>
                    <TouchableOpacity style={{width:'40%', borderWidth:2,padding:6, borderRadius:10,paddingVertical:10}}>
                        <Text style={{textAlign:'center'}}><Ionicons name={'cash'} size={15} color={'#191C25'} /> Deposit</Text>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={[{width:'40%', borderWidth:2,padding:5, backgroundColor:'#191C25',borderRadius:10,paddingVertical:10}]}>
                        <Text style={{textAlign:'center',color:'white'}}><Ionicons name={'book'} size={15} color={'#dad7cd'} /> Transactions</Text>
                    </TouchableOpacity>
                </View>
    
                
    
                </SafeAreaView>
  )
}

export default NairaAccount