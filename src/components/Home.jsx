

import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'

const Home = () => {

  const {user} =useContext(AuthContext);
  const {logout} =useContext(AuthContext)

  // const {email}=user

  const handleSignout =()=>{

    logout()
    .then( res=>{
      console.log('logout successful ',res)
    })

    .catch(error =>{
      console.error(error)
    })


  }


    


  return (
    <div className='flex'>

        <h4>this is home of : {user && user?.email} </h4>
        
        {user && <button onClick={handleSignout} className=' my-4 bg-red-600 p-3 rounded'>Signout</button>}
    </div>
  )
}

export default Home