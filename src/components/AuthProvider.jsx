
import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import auth from '../firebase-config'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
  const [loading,setLoading] =useState(true);



    const logout =()=>{
      setLoading(true)
        return signOut(auth)
        
        }



    const [user,setUser] =useState(null);

			
    
    
    
    const createUser=(email,password)=>{
      setLoading(true)

        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
      setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
  

    }


    useEffect(()=>{

       const unSubscribe= onAuthStateChanged(auth, (currentUser) => {

        console.log('current value of the current user',currentUser);
        setUser(currentUser);
      setLoading(false)


          });

          return ()=>{
            unSubscribe();
          }


    },[])

    



    
    const authInfo ={user,createUser,loginUser,logout,loading}



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