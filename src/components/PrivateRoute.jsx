
import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)
    

    if(user){
        return children
    }

  return <Navigate to='/'></Navigate>


  
}

export default PrivateRoute;

PrivateRoute.propTypes ={
    children: PropTypes.node

}