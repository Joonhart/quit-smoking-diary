import React from 'react'
import TimeRangeChart from '../components/chart/TimeRangeChart'
import { useAuthContext } from '../context/AuthContext';

const Statistics = () => {
  const { uid } = useAuthContext();
  return (
    <div className='w-full h-full text-center justify-center'>
      <TimeRangeChart uid={uid}/>
    </div>
  )
}

export default Statistics
