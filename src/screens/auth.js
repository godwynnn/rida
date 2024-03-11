import React,{useContext,useRef,useEffect,useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { Text,View,SafeAreaView,Platform,StatusBar,StyleSheet,Dimensions,Image, TouchableOpacity } from "react-native";
import img from '../../assets/auth.png'
// import { SafeAreaView } from "react-native-safe-area-context";

const {width,height}=Dimensions.get('window')

import { getAllData } from "../../utils/asyncStorage";



export const Authentication=({navigation})=>{
    // const navigation=useNavigation()


    // const datas=getAllData()
    


    function goToLogin(){
        navigation.navigate('login')
    }

    function goToSignup(){
        navigation.navigate('signup')
    }
    return(
        <SafeAreaView style={styles.container}>
            


            <View  style={styles.intro}>

                 {/* <Text style={styles.intro_text}>Welcome</Text> */}
                 <Image source={require('../../assets/logo/3.png')} style={styles.logo}/>
                {/* <View style={styles.img_intro_holder}> */}
                    <Image source={img} alt="" style={styles.img_intro} />
                {/* </View> */}
               
            </View>
 
            <View style={styles.auth_holder}>
                <TouchableOpacity style={[styles.auth_btn,styles.auth_btn_1]} onPress={goToLogin} ><Text style={styles.auth_btn_1_text}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.auth_btn,styles.auth_btn_2]} onPress={goToSignup} ><Text style={styles.auth_btn_2_text}>Signup</Text></TouchableOpacity>
                
                {/* SOCIAL LOGIN SECTION */}
                <View style={styles.social_auth}>

                </View>
            </View>
            
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingTop: Platform.OS==='android'? StatusBar.currentHeight : '0',
        backgroundColor:'#ffff'
    },
    intro:{
        flex:0.50,
        backgroundColor:'#1D1A38',
        justifyContent:'center',
        alignContent:'center',
        // paddingLeft:width*0.07,
        borderBottomRightRadius:120,
        borderBottomLeftRadius:120,
        
        
    },
    logo:{
        flex:0.35,
        width:"70%",
        alignSelf:'center',
    },
    intro_text:{
        color:'white',
        fontWeight:'bold',
        fontSize:35,
        top:40,
        // borderColor:'red',
        // borderWidth:1,
        textAlign:'center',
        flex:2,

        // color:'#817F82'
        
    },
    
    auth_opt:{
        flex:0.5,
        // backgroundColor:'#0D092A'
    },
    img_intro_holder:{
        width:width,
        backgroundColor:'red',
        height:width*0.9,
        // top:20,
        
    },
    img_intro:{
        width:width*0.5,
        height:width*0.5,
        marginRight:0,
        // borderColor:'red',
        // borderWidth:1,
        transform:[{translateX:width*0.25},{translateY:width*0.25}]
        // top:5,
        
    },
    auth_holder:{
        flex:0.50,
        justifyContent:'center',
        alignItems:'center',
        gap:10,
        // borderColor:'red',
        // borderWidth:1,
    },
    auth_btn:{
        //  borderColor:'red',
        // borderWidth:1,
        width:'60%',
        height:'15%',
        textAlign:'center',
        borderRadius:10,
    },
    auth_btn_1:{
        backgroundColor:'#1D1A38',
        // color:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    auth_btn_1_text:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,

    },
    auth_btn_2:{
        backgroundColor:'#ffff',
        color:'#1D1A38',
        borderColor:'#1D1A38',
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',

    },
    auth_btn_2_text:{
        color:'#1D1A38',
        fontWeight:'bold',
        fontSize:15,

    },
    social_auth:{
        // borderColor:'#1D1A38',
        // borderWidth:1,
        width:'100%',
        height:'15%',
    }
})