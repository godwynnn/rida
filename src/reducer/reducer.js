import { createSlice } from "@reduxjs/toolkit";
import { secureGetItem } from "../../utils/secureStorage";
import { getItem } from "../../utils/asyncStorage";




let State={
    refresh_token:'',
    access_token:'',
    status:false

}

// const AuthenticationReducer=(state,action)=>{
//     switch (action.type) {
//         case 'LOGIN':
//             console.log('logged in')
//             break;
//         case 'LOGOUT':
//             console.log('logged out')
//             break;
//         default:
//             console.log(state);
//     }
// }


export const AuthenticationSlice=createSlice({
    name:'auth',
    initialState:State,
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
    reducers:{
        Login:async (state,action)=>{
            
           const auth_data=await getItem('auth_data')
           const data=JSON.parse(auth_data)
           console.log('AUTH DATA :',data)
           console.log('AUTH DATA :',data.token.access)
            
            state.auth.refresh_token=data.token.refresh
            state.auth.access_token=data.token.access
            state.auth.status=true
        
        },


        
        Logout:(state,action)=>{
            console.log('logged out')
        }
    }
    // reducers:AuthenticationReducer(state,action),
})
const {actions:AuthenticationAction,reducer:AuthenticationReducer}=AuthenticationSlice

export  {AuthenticationAction,AuthenticationReducer}

// export const {actions:}

