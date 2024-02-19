import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React,{useContext,useRef,useEffect,useState} from "react";
import { Text,View,KeyboardAvoidingView, Platform, } from "react-native";
import {OnboardingView} from "./screens/onboarding"
import {Authentication} from "./screens/auth"
import { LoginView } from "./screens/login";
import { SignupView } from "./screens/signup";
import { getItem } from "../utils/asyncStorage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


import IndexView from "./screens";



function Navigation(){
    const stack=createNativeStackNavigator()


    
    
    const [ShowOnboarded,setShowOnboarded]=useState(null);

    

    async function checkIfUserOnboarded(){
        const onboarded=await getItem('onboarded');


        
        if (onboarded==1){
            setShowOnboarded(false);
        }else{
            setShowOnboarded(true);
        }
    }

    useEffect(()=>{
        checkIfUserOnboarded();
    },[])

    if (ShowOnboarded==null){
        return null
    }


    
    if(ShowOnboarded){
        

    
                return(
                    <KeyboardAvoidingView
                    
                    behavior={Platform.OS==='ios'?'padding':'padding'}
                    style={{flex:1}}
                    >
                        <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="onboarding">
                                <stack.Screen component={OnboardingView} name="onboarding"/>
                                <stack.Screen component={Authentication} name="auth"/>

                        </stack.Navigator>
                </KeyboardAvoidingView>
                    )
                }else{
                    return(

                    <KeyboardAvoidingView
                    
                    behavior={Platform.OS==='ios'?'padding':'height'}
                    style={{flex:1}}
                    
                    >
                        <stack.Navigator screenOptions={{headerShown:false}} initialRouteName="auth">
                                {/* <stack.Screen component={OnboardingView} name="onboarding"/> */}
                                <stack.Screen component={Authentication} name="auth"/>
                                <stack.Screen component={LoginView} name="login"/>
                                <stack.Screen component={SignupView} name="signup"/>
                
                        </stack.Navigator>

                    </KeyboardAvoidingView>
                        )
        }
       
}


export default Navigation