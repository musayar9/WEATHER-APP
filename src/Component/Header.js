import React, { useEffect } from 'react'

import SearchWeather from './SearchWeather';
import { useDispatch, useSelector } from 'react-redux';
import { setChangeTheme } from '../redux/weatherSlice';
import { BsSunFill } from 'react-icons/bs';
import { IoMoonSharp } from 'react-icons/io5';

function Header() {
  const theme = useSelector((state)=>state.weather.theme)
  const dispatch = useDispatch()

  useEffect(()=>{
    theme === "dark" ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark")

  }, [theme])

  
  return (
    <div className='w-full  h-full bg-gray-600 py-4 dark:bg-slate-950 dark:text-gray-400 
    flex flex-col items-center justify-between p-4'>
    <h2 className='font-bold text-2xl md:hidden dark:text-gray-50'>Weather Status</h2>
     <div className="w-full  h-20 bg-gray-600 py-4 dark:bg-slate-950 dark:text-gray-400 
    flex flex-row items-center justify-between p-4
    ">
        <button onClick={()=>dispatch(setChangeTheme())} className= 'order-3 md:order-1 w-10 h-10 md:w-12 md:h-12 border border-gray-50 dark:bg-cyan-500 text-gray-50 dark:border-none font-bold flex items-center justify-center p-3 rounded-xl'>
        {theme === "light" ? <BsSunFill className='text-yellow-400'/> :<IoMoonSharp/>}
      </button>
      <div className='flex  items-center justify-center order-1 md:order-2'>
        <p onClick={()=>window.location.reload()} className= 'flex flex-row items-center justify-center  cursor-pointer text-2xl md:text-3xl lg:text-4xl ml-4 md:ml-24 lg:ml-48 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-400 tracking-widest font-bold hover:text-blue-500 duration-200'>
          <img alt="header" src={require(`../assets/icons/header.jpeg`)} className='flex md:hidden w-10 h-10 shadow-xl rounded-xl'/>
          <span className='hidden md:flex'>Weather Status</span>

         </p>
      </div>



      <div className= "order-2 md:order-3 bg-cyan-500 rounded-lg dark:bg-cyan-950 my-2">
        <SearchWeather/>
      </div>
    </div>
    </div>
   
  )
}

export default Header
