import React, { useEffect, useState } from 'react'
import {RiTempHotLine} from "react-icons/ri"
function DailyStatus({ daily }) {
    console.log("dailySTtatus", daily);
    const [dailyWeather, setDailyWeather] = useState({})

    const moment = require("moment-timezone")
    require("moment/locale/tr")

    useEffect(() => {
        if (Object.keys(daily).length === 0) {
            const weather = daily.filter((day) =>
                moment.unix(day.dt).utc().format("LT") === "12.00"
            )
            setDailyWeather(weather)
            console.log("if day", weather);
        } else {
            const weather = daily.filter((item, index) =>
                index === Math.floor(Object.keys(daily).length / 2)
                
            )
            setDailyWeather(weather)
            console.log("else day", weather);
        }
    }, [moment, daily])

    if(Object.keys(dailyWeather).length === 0) return
    return (
        <div className='relative flex flex-col items-center justify-center p-6 m-2 w-56  max-w-lg  rounded-xl drop-shadow-xl bg-gray-50 dark:bg-gray-800  '>
            <div className='w-full top-0 left-0 bg-cyan-500 absolute rounded-t-xl flex items-center justify-center '>
                <h5 className='text-gray-900 p-2 dark:text-white text-lg tracking-widest font-bold'>
                   
                    {moment.unix(daily[0].dt).utc().format("ll")}
                </h5>
            </div>
            <h4 className='mt-8 dark:text-gray-50 font-semibold text-md lg:text-xl'>
            {moment.unix(dailyWeather[0].dt).utc().format("dddd")}
            </h4>
            <img src={require(`../assets/icons/${dailyWeather[0].weather[0].icon}.png`)} alt='icon' className='drop-shadow-xl object-cover w-16 mt-2'/>
            <span className='font-semibold dark:text-gray-100 capitalize mt-2'>{dailyWeather[0].weather[0].description}</span>

            <div className='flex items-center justify-center '>
            <RiTempHotLine className='text-lg text-blue-700'/>
                <p className='text-gray-950 dark:text-gray-50 font-bold'>
            
                    {dailyWeather[0].main.temp}°
                </p>
            </div>
        </div>
    )
}

export default DailyStatus
