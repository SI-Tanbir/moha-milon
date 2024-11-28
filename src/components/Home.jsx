

import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'

const Home = () => {

  const authInfo =useContext(AuthContext);

  console.log(authInfo)
  return (
    <div>

        <h4>this is home of :{authInfo.name}</h4>
        
    </div>
  )
}

export default Home