import React from 'react'
import { useSelector } from 'react-redux'
import { CiTempHigh } from 'react-icons/ci'
import { WiHumidity } from 'react-icons/wi'
import Loading from './Loading'
function WeatherMain() {
    const { currentWeatherData } = useSelector((state) => state.weather)
    let unixSunset = currentWeatherData.sys.sunset
    let dateSunset = new Date(unixSunset * 1000)
    let sunset = dateSunset.toLocaleTimeString()

    let unixSunrise = currentWeatherData.sys.sunrise;
    let dateSunrise = new Date(unixSunrise * 1000);

    let sunrise = dateSunrise.toLocaleTimeString()

    const date = new Date()
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const newHour = (`${hour}:${minute}`)
    const moment = require("moment-timezone")
    require("moment/locale/tr")

    if (Object.keys(currentWeatherData).length === 0) return <Loading />
    return (

        <div className="w-full max-w-full bg-gray-400  shadow dark:bg-slate-800">

            <div className="px-5 pb-5 pt-5">
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <h5 className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600 tracking-widest">{currentWeatherData.name}</h5>
                    <p className='text-gray-900 dark:text-gray-50 font-semibold lg:font-bold  text-2xl lg:text-3xl '>
                        {moment.unix(currentWeatherData.dt).format("dddd")} - {newHour}
                    </p>

                    <div className=' w-full flex flex-row items-center justify-around'>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-yellow-400 tracking-widest  font-bold flex flex-col items-center justify-center">
                            <img className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full' alt='sunrise' src={(require(`../assets/icons/sunrise2.png`))} />
                            <span className=' text-sm md:text-2xl'> {sunrise}</span>
                        </p>
                        <img className='text-center drop-shadow w-36 lg:w-44' alt={currentWeatherData.name} src={require(`../assets/icons/${currentWeatherData.weather[0].icon}.png`)} />
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-slate-600 tracking-widest text-lg font-bold flex flex-col items-center justify-center ">
                            <img className='w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full ' alt='sunset' src={(require(`../assets/icons/sunset2.png`))} />

                            <span className=' text-sm md:text-2xl'> {sunset}</span>
                        </p>

                    </div>

                    <div className='flex flex-col items-center justify-center '>

                        <p className="text-lg lg:text-xl font-semibold tracking-tight capitalize text-gray-900 dark:text-white -mt-5">"{currentWeatherData.weather[0].description}"</p>
                        <h3 className='text-4xl lg:text-5xl ml-8 font-bold text-center mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-slate-600 tracking-widest'>
                            {`${(currentWeatherData.main.temp)} C°`}
                        </h3>


                        <div className='p-4 flex flex-col items-center justify-center space-x-8'>
                            <div className='flex flex-row items-center justify-center'>
                                <WiHumidity className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600" />
                                <p className='text-xl lg:text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600 '>Nem: {currentWeatherData.main.humidity}

                                </p>
                                <span className='text-lg -mt-3 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600'>%</span>
                            </div>

                            <div className='flex flex-row items-center justify-center ms-12'>
                                <CiTempHigh className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600" />
                                <p className='text-xl lg:text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600 '>Hissedilen: {currentWeatherData.main.feels_like}°</p>
                            </div>

                        </div>
                    </div>



                </div>



            </div>
        </div>

    )
}

export default WeatherMain
