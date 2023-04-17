import React from 'react'
import { useAuthContext } from '../context/AuthContext'

const Goal = () => {
    const {user} = useAuthContext();
  return (
    <div>
    {!user && <p>목표를 거창하게 세우는 곳입니다</p>}
      {user && <p>너의 목표는...</p>}
    </div>
  )
}

export default Goal
