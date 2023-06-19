import React from 'react'
import { useSelector } from 'react-redux'
import DailyStatus from './DailyStatus';

function DailyWeather() {
    const {dailyWeather} = useSelector((state)=>state.weather)

    console.log("dailYWeather", dailyWeather);
    if(Object.keys(dailyWeather).length === 0) return;
  return (
    <div className='w-full max-w-full p-14 -mt-10 flex flex-col items-center justify-center shadow bg-gray-300 dark:bg-gray-300'>
        <h2 className='text-center font-bold text-3xl p-2 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-slate-600 tracking-widest duration-200'>Haftalık Hava Durumu</h2>
        <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-4'>

            {
                React.Children.toArray(
                    dailyWeather.map((weather)=><DailyStatus daily={weather}/>)
                )
            }
        </div>
      
    </div>
  )
}

export default DailyWeather
