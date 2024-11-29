
import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import auth from '../firebase-config'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext=createContext(null);


const AuthProvider = ({children}) => {


    const [user,setUser] =useState(null);


    
    
    
    const createUser=(email,password)=>{
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
  

    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(uid);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });



    
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