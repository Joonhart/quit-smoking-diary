import React from 'react'

const LoginButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='text-white rounded-2xl bg-black'>
      {text}
    </button>
  )
}

export default LoginButton
