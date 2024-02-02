import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
        console.log('Error removing item.', e)
    }
  
    
  }


  export const getItem = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch(e) {
        console.log('Error Getting item.', e)
    }
  
    
  }

  export const setItem = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch(e) {
        console.log('Error setting item.', e)
    }
  
   
  }

  // export const getAllData=async ()=>{
  //   const keys = await AsyncStorage.getAllKeys();
  //   const data = await AsyncStorage.multiGet(keys);

    
  // }