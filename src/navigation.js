import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useRef, useEffect, useState, useLayoutEffect } from "react";
import { Text, View,KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { OnboardingView } from "./screens/onboarding"
import { Authentication } from "./screens/auth"
import { LoginView } from "./screens/login";
import { SignupView } from "./screens/signup";
import { getItem } from "../utils/asyncStorage";
import IndexView from "./screens";
import Mapscreen from "./screens/mapscreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Destination from "./components/destination";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabIndexView } from "./screens";
import LottieView from 'lottie-react-native';

import { Dimensions } from 'react-native';


export function MyDrawer() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator screenOptions={{headerTitle:'', headerTransparent:true, headerShown:true }}>
        
        <Drawer.Screen component={Mapscreen} name="Map" options={{headerShown:true}} />

        
      </Drawer.Navigator>
    );
  }


function Navigation() {
    const stack = createNativeStackNavigator()
    const {width,height}=Dimensions.get('screen')




    const [ShowOnboarded, setShowOnboarded] = useState(null);
    const [is_loggedIn, setisLoggedIn] = useState(null)

    const checkIfUserIs_loggedIn = async () => {
        const logged_in = await getItem('logged_in');
        

        if (logged_in == 1) {
           setisLoggedIn(true)
            
        } else {
            
            setisLoggedIn(false)
            
        }
    }


    async function checkIfUserOnboarded() {
        const onboarded = await getItem('onboarded');
        console.warn('LOGGED IN ', onboarded)


        if (onboarded == 1) {

            setTimeout(()=>{
                setShowOnboarded(false);
               },3000)
            
            
        } else {
            setTimeout(()=>{
                setShowOnboarded(true);
               },3000)
            
        }
    }


    

    console.warn('LOGGED IN ', ShowOnboarded)


    useEffect(() => {
        checkIfUserOnboarded();
        checkIfUserIs_loggedIn();
        
    }, [])


    
    
    
    

    if (ShowOnboarded == null) {
        return  (
            <SafeAreaView  style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center',backgroundColor: '#ffffff',}}>
                <LottieView 
                resizeMode={"contain"}
                source={require('../assets/splash_screen.json')} autoPlay loop={false}
                 style={{width:width,height:height}}  />

            </SafeAreaView>
    )

    }



    if (ShowOnboarded) {



        return (
            <KeyboardAvoidingView

                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="onboarding">
                    <stack.Screen component={OnboardingView} name="onboarding" />
                    <stack.Screen component={Authentication} name="auth" />
                    <stack.Screen component={LoginView} name="login" />
                    <stack.Screen component={SignupView} name="signup" />
                    <stack.Screen component={TabIndexView} name="index" />
                    <stack.Screen component={Mapscreen} name="MapScreen" />

                </stack.Navigator>
            </KeyboardAvoidingView>
        )
    } else {
        if (!is_loggedIn) {
            return (

                <KeyboardAvoidingView

                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                
                    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="auth">


                        <stack.Screen component={Authentication} name="auth" />
                        <stack.Screen component={LoginView} name="login" />
                        <stack.Screen component={SignupView} name="signup" />
                        <stack.Screen component={TabIndexView} name="index" />
                        <stack.Screen component={Mapscreen} name="MapScreen" />



                    </stack.Navigator>
                    </KeyboardAvoidingView>
            )

        } else {
            return (

                <KeyboardAvoidingView

                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                    <stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="index">



                        <stack.Screen component={TabIndexView} name="index"  />
                        <stack.Screen component={Mapscreen} name="MapScreen" />
                       

                    </stack.Navigator>
                    
                    </KeyboardAvoidingView>
            )

        }

    }

}


export default Navigation