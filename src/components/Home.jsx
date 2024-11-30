

import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Link } from 'react-router-dom';

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

        {/* <h4>this is home of : {user && user?.email} </h4> */}
        


        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">{user? user?.email :'firebase-login'}</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Login</Link></li>
      <li>
          <Link to='/dashboard'>Dashboard</Link>
      </li>
    </ul>
  </div>
</div>

        
        {user && <button onClick={handleSignout} className=' my-4 bg-red-600 p-3 rounded'>Signout</button>}
    </div>
  )
}

export default Home