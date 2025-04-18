import React,{useContext,useRef,useEffect,useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { Text,
    View,
    SafeAreaView,
    Platform,
    StatusBar,
    StyleSheet,
    Dimensions,
    Image, 
    TouchableOpacity,
    // TextInput,
   
    Button,
    
    } from "react-native";
    
    import { TextInput } from "react-native-paper";
    import { Formik } from "formik";
    import * as yup from 'yup';
    import { useDispatch } from "react-redux";
    import { useSelector } from "react-redux";
import { AuthenticationAction } from "../reducer/reducer";
import axios from "axios";
import { ScrollView } from "react-native";
import { setItem,getItem } from "../../utils/asyncStorage";
import { Url } from "../urls";
import {ActivityIndicator,MD2Colors} from "react-native-paper";

const {height,width}=Dimensions.get('window')

const urls=Url()

export const LoginView=({navigation})=>{

    const dispatch=useDispatch()
    

    
    const [load,setloader]=useState(false)
   

    const[showPass,setShowPass]=useState(true)
    const LoginValidationSchema=yup.object({
        email:yup.string().email('invalid email address').required('email is required'),
        password:yup.string().min(6,({min})=>`password must be more than ${min} characters`).required('password is required'),
    })

    const LoginUser= async(values)=>{
       

        // axios.post('https://928e-197-211-53-5.ngrok-free.app/auth/login',{
        //     data:values
        // }).then(res=>{
            
        //     console.log(res)
        //     console.log('yes')
        //     // console.log(values)
        // }).catch(error=> console.log(error)
        console.warn(values)
        setloader(true)
        // console.log(values)
        const res=await fetch(urls.login,{
            method:'POST',
            headers: {
                'content-type': 'application/json'
                
              },
              
              body:JSON.stringify(values)
        }).catch(error=>{
            console.log(values)
            console.log(`ERROR ${error}`)
        })
        const data=await res.json()
        console.warn(data)
       
        if(data.success===true){
            console.log(JSON.stringify(data))
            setItem('auth_access_token',data.token.access)
            setItem('auth_refresh_token',data.token.refresh)
            setItem('logged_in','1')
            dispatch(AuthenticationAction.Login())
            
            
            
            // const stored_data = await u_data
            
            // console.log(`STORED_DATA: ${stored_data}`)
            setloader(false)
            navigation.navigate('index')
            

            
        }else{
            console.log('failed login attempt')
            setloader(false)
        }
        
        
        // console.log(stored_data)

    }


    return(
        <ScrollView  contentContainerStyle={styles.auth_holder}>

           <Image style={styles.logo} source={require('../../assets/logo/1.png')}/>
           
            
            <View style={styles.auth}>
                <Formik
                    initialValues={{email:'',password:''}}
                    onSubmit={(values)=>LoginUser(values)}
                    validationSchema={LoginValidationSchema}
                >

                {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                    <>
                        <TextInput
                        //  placeholder="Enter Email"
                        label="Email"
                        style={[styles.input]}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                                
                        />
                        {(errors.email && touched.email) &&
                        <Text style={styles.errorText}>{errors.email}</Text>
                        }



                        <TextInput  
                            // placeholder="Enter Password"
                            style={[styles.input]} 
                            secureTextEntry={showPass}
                            label="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            right={
                                <TextInput.Icon
                                icon="eye"
                                onPress={() => setShowPass(!showPass)}
                                // color='#1D1A38'
                                />      
                        }/>
                        {(errors.password && touched.password) &&
                            <Text style={styles.errorText}>{errors.password}</Text>
                          }


                          

                        <TouchableOpacity style={[styles.btn]} onPress={handleSubmit}>
                            {/* <Button title="Login" style={[styles.login_btn]}  /> */}
                          
                            
                            <Text  style={[styles.login_btn]} >Login</Text>
                          
                           
                            
                        </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
            
            
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    auth_holder:{
        paddingTop:Platform.OS=='android'? StatusBar.currentHeight:'0',
        flex:1,
        justifyContent:'space-evenly',

        alignItems:'center',
        display:"flex",
        flexDirection:'column',
        // backgroundColor:linea
        

    },
    input:{
        width :width*0.8,
        height:50,
        marginTop:20,
        borderBottomColor:'#1D1A38',
        borderBottomWidth:1,
    },
    btn:{
        marginTop:50,
        width: width*0.6,
        height:width*0.15,
        backgroundColor:'#1D1A38',
        display:'flex',
        flexDirection:'row-reverse',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,

    },
    login_btn:{
        color:'#ffff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
    },
    logo:{
        width:'50%',
        flex:0.8,
    },
    auth:{
        flex:1.5,
    }
})
