import React, { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCity, fetchCityData, fetchDailyData } from '../redux/weatherSlice'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function SearchWeather() {


const [cityName, setCityName] = useState("")
const {coord} = useSelector((state)=>state.weather)
const dispatch = useDispatch()
const showError = ()=>{
    toast.error("Şehir ismi giriniz",{
        position:toast.POSITION.TOP_CENTER
    })

}

const showCity=()=>{
toast.error("Yanlış Şehir Adı Girdiniz", {
    position:toast.POSITION.TOP_CENTER
})
}
const handleCity = (e)=>{
    e.preventDefault()
    const controlCity =/^([A-Za-zğüşöçıİĞÜŞÖÇ\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;

    if(!cityName){
      showError()

    }else if(!controlCity.test(cityName)){
        showCity()
        setCityName("")
    }else{
        dispatch(fetchCity(cityName))
        dispatch(fetchCityData(cityName))
        dispatch(fetchDailyData(coord))
        setCityName("")
    }
}
  return (
    <>

<form className="flex items-center w-48 md:w-56 lg:w-72" onSubmit={handleCity}>   
 
 <div className="relative w-full">
     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    
         <FiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400"/> 
     </div>
     <input type="text" id="simple-search" className=" bg-gray-50 border border-gray-300 text-gray-900 
     text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 
       dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       placeholder="Search" 
     value={cityName} onChange={(e)=>setCityName(e.target.value)}
     />
 </div>
 <button type="submit" className="p-2.5 ml-2 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-cyan-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   <FiSearch/>

 </button>

 

</form>


<ToastContainer autoClose={500} pauseOnFocusLoss={true} pauseOnHover={false} />
    </>


  )
}

export default SearchWeather
