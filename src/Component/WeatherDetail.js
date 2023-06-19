import React from 'react'
import { useSelector } from 'react-redux'
import { WiStrongWind } from 'react-icons/wi'
import { BsFillCloudsFill } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'
import { TbTemperaturePlus } from 'react-icons/tb'
import { TbTemperatureMinus } from 'react-icons/tb'
function WeatherDetail() {

    const { currentWeatherData } = useSelector((state) => state.weather)
 

    
    return (


        <div className='w-full max-w-full border border-none p-16 md:p-14 lg:p-12 flex flex-col items-center justify-center shadow-xl bg-gray-300'>
             <h2 className='text-center font-bold text-3xl p-2 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-slate-600 tracking-widest duration-200'>Günlük Hava Durumu</h2>
            <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-4">
                <div className=" flex flex-col items-center justify-center w-56 h-36 max-w-lg p-6 bg-white  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white break-words">Rüzgar Hızı</h5>
                    <div className="flex items-center justify-center font-normal text-gray-700 dark:text-gray-400 ">
                        <WiStrongWind className="w-12 h-12 text-cyan-700" />
                        <p className='text-2xl font-bold'>{currentWeatherData.wind.speed}(km/sa)</p>

                    </div>
                </div>
                <div className=" flex flex-col items-center justify-center w-56 h-36 max-w-lg p-6 bg-white  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white break-words">Bulutluluk</h5>
                    <div className="flex items-center justify-center font-normal text-gray-700 dark:text-gray-400 ">
                        <BsFillCloudsFill className="w-12 h-12 text-cyan-700" />
                        <p className='text-2xl font-bold'>{currentWeatherData.clouds.all}</p>
                        <span className='text-lg -mt-3 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-400'>%</span>

                    </div>
                </div>

                <div className=" hidden  md:flex flex-col items-center justify-center w-56 h-36 max-w-lg p-6 bg-white  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white break-words">Görününürlük</h5>
                    <div className="flex items-center justify-center font-normal text-gray-700 dark:text-gray-400 ">
                        <IoEyeSharp className="w-12 h-12 text-cyan-700" />
                        <p className='text-2xl font-bold'>{currentWeatherData.visibility}</p>

                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center w-56 h-36 max-w-lg p-6 bg-white  rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800">
                    <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-white break-words">Basınç</h5>
                    <div className="flex items-center justify-center font-normal text-gray-700 dark:text-gray-400 ">
                        <img className='w-12 h-12  bg-gray-50 dark:bg-gray-800' alt="pressure" src={(require(`../assets/icons/pressure2.jpg`))} />
                        <p className='text-2xl font-bold'>{currentWeatherData.main.pressure}</p>
                        <span className='text-lg -mt-3 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-400'>hPa</span>

                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center w-56 h-36 max-w-lg  bg-white borde rounded-lg shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800">
                    <div className='w-full h-full flex flex-row'>

                        <div className="w-1/2 h-full flex flex-col items-center justify-center font-normal text-gray-700 dark:text-gray-400 ">
                            <h5 className="mb-2 text-xl lg:text-xl font-semibold text-center text-gray-900 dark:text-white break-words">Max S.</h5>
                            <TbTemperaturePlus className="w-8 h-8 text-cyan-700" />
                            <p className='text-2xl font-bold'>{currentWeatherData.main.temp_max}°</p>


                        </div>

                        <div className="w-1/2 h-full dark:bg-gray-50 rounded-r-lg flex flex-col items-center justify-center font-normal text-gray-700 dark:text-gray-400 ">
                            <h5 className="mb-2 text-xl lg:text-2xl font-semibold text-center text-gray-900 dark:text-gray-950 break-words">Min S.</h5>
                            <TbTemperatureMinus className="w-8 h-8 text-red-700" />
                            <p className='text-2xl font-bold'>{currentWeatherData.main.temp_min}°</p>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default WeatherDetail
