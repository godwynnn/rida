import { createSlice } from "@reduxjs/toolkit";
import { secureGetItem } from "../../utils/secureStorage";
import { getItem } from "../../utils/asyncStorage";



auth_data=getItem('auth_data')
console.log(auth_data)


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
    reducers:{
        Login:(state,action)=>{
            
            
            state.refresh_token=action.payload.token.refresh
            state.access_token=action.payload.token.refresh
            state.status=true
        
            

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

