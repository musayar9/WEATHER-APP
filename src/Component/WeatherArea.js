import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCity, fetchCityData, fetchDailyData } from '../redux/weatherSlice'
import Loading from './Loading'
import Error from './Error'
import WeatherMain from './WeatherMain'
import WeatherDetail from './WeatherDetail'
import DailyWeather from './DailyWeather'

const coord = { lat: 40.982, lon: 28.6399 }
function WeatherArea() {
  const { currentWeatherStatus, dailyWeatherStatus, currentWeatherData, error } = useSelector((state) => state.weather)
  const dispatch = useDispatch()

  useEffect(() => {
    if (dailyWeatherStatus === "") {
      dispatch(fetchCity("beylikdüzü"))
      dispatch(fetchCityData("beylikdüzü"))
      dispatch(fetchDailyData(coord))
    }
  }, [dailyWeatherStatus, dispatch])

  if (Object.keys(currentWeatherData).length === 0) return <Loading />
  if (currentWeatherStatus === "failed" || dailyWeatherStatus === "failed") {

    
    return <Error  message={error} />
  }
  return (
    <div>
      <WeatherMain />
      <WeatherDetail />
      <DailyWeather/>
 
    </div>
  )
}

export default WeatherArea
