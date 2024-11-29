
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import auth from '../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext=createContext(null);


const AuthProvider = ({children}) => {


    const [user,setUser] =useState(null);


    
    
    
    const createUser=(email,password)=>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
  

    }
    
    const authInfo ={user,createUser,loginUser}



  return (
    <div>


        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>


         



    </div>
  )
}


export default AuthProvider

AuthProvider.propTypes ={
    children: PropTypes.node

}


 /* 
 1. create context and export it

 2. set provider with value

 3.
 
 */