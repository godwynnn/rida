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
    ScrollView
    
    } from "react-native";
    // import LinearGradient from "react-native-linear-gradient";
    // import { LinearGradient } from 'expo-linear-gradient';
    import { TextInput } from "react-native-paper";
    import { Formik } from "formik";
    import * as yup from 'yup'
   


const {height,width}=Dimensions.get('window')


export const SignupView=()=>{




    const[showPass,setShowPass]=useState(true)
    const LoginValidationSchema=yup.object({
        first_name:yup.string().required('field can\'t be empty'),
        last_name:yup.string().required('field can\'t be empty'),
        email:yup.string().email('invalid email address').required('email is required'),
        password:yup.string().min(6,({min})=>`password must be more than ${min} characters`).required('password is required'),
    })

    const submitData=(values)=>{
        console.log(values)
    }


    return(
        <SafeAreaView  style={styles.auth_holder}>

           <Image style={styles.logo} source={require('../../assets/logo/1.png')}/>
           
            
            <View style={styles.auth}>
                <Formik
                    initialValues={{email:'',password:'',first_name:'',last_name:''}}
                    onSubmit={values=>submitData(values)}
                    validationSchema={LoginValidationSchema}
                >

                {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
                    <>

                    <TextInput
                        //  placeholder="Enter Email"
                        label="First Name"
                        style={[styles.input]}
                        onChangeText={handleChange('first_name')}
                        onBlur={handleBlur('first_name')}
                        value={values.first_name}
                                
                        />
                        {(errors.first_name && touched.first_name) &&
                        <Text style={styles.errorText}>{errors.first_name}</Text>
                        }


                        <TextInput
                        //  placeholder="Enter Email"
                        label="last Name"
                        style={[styles.input]}
                        onChangeText={handleChange('last_name')}
                        onBlur={handleBlur('last_name')}
                        value={values.last_name}
                                
                        />
                        {(errors.last_name && touched.last_name) &&
                        <Text style={styles.errorText}>{errors.last_name}</Text>
                        }


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
                            <Text  style={[styles.login_btn]}>Sign up</Text>
                        </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </View>
            
            
        </SafeAreaView>
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
        width:'55%',
        flex:0.5,
    },
    auth:{
        flex:1.5,
    }
})
