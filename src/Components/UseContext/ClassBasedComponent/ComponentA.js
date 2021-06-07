import React  from 'react'
import ComponetB from './ComponetB'
import CryptoJS from 'crypto-js'
export const User=React.createContext()

export default function componentA() {
    var data = [{id: 1}, {id: 2}]
 
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
     
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
     
    console.log(decryptedData); // [{id: 1}, {id: 2}]
    return (
        <div>
            componnet A
            <User.Provider value="Navin">
            <ComponetB/>
            </User.Provider>
        </div>
    )
}

