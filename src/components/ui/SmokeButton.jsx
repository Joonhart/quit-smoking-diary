import React from 'react'

const SmokeButton = ({onClick, text}) => {
  return (
    <button className='bg-gray-500 text-center h-20 w-full text-4xl' onClick={onClick}>
      {text}
    </button>
  )
}

export default SmokeButton
