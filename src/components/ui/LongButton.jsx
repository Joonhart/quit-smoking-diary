import React from 'react'

const LongButton = ({onClick, text}) => {
  return (
    <button className='bg-rose-400 text-center text-white h-20 w-full text-4xl hover:brightness-125' onClick={onClick}>
      {text}
    </button>
  )
}

export default LongButton
