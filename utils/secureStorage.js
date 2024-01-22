import RNSecureStorage from 'rn-secure-storage';


export const secureSetItem=(key,value)=>{
    RNSecureStorage.setItem(key,value)
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}


export const secureGetItem=(key)=>{
    RNSecureStorage.getItem(key).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}