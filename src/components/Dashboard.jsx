

import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'

const Dashboard = () => {
  const {user}=useContext(AuthContext)

  return (
    <div>welcome to deshboard name: {user?.email}</div>
  )
}

export default Dashboard