import React from 'react'

function Error({message}) {

  return (
    <div className='w-full  h-[calc(100vh-112px)] bg-[#f95c5e]  p-6 flex flex-col items-center justify center space-y-10 '>
      <p className='text-5xl font-bold capitalize text-gray-50'> {message}</p>
      <img className= "w-96 drop-shadow-2xl flex items-center jsutify-center rounded-lg" alt={message} src={(require(`../assets/icons/error.png`))}/>
    </div>
  )
}

export default Error
