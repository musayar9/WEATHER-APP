import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCity = createAsyncThunk("weather/fetchCity", async (city) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
    const coord = res.data.coord
    const cityName = res.data.name
    const cityStatus = res.status
    return { coord, cityName, cityStatus }

})


export const fetchCityData = createAsyncThunk("weather/fetchCityData", async(city)=>{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&lang=tr&units=metric`)
    return res.data
})


export  const fetchDailyData = createAsyncThunk("weather/fetchDailyData", async(coord)=>{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.REACT_APP_API_KEY}&lang=tr&units=metric`)
    console.log(res.data);
    const dailyList = res.data.list 
    const city = res.data.city
    console.log(dailyList);

    const listStatus = []
    dailyList.forEach((daily)=>{
        const newList = dailyList.splice(0, dailyList.filter((item)=>item.dt_txt.split("").splice(0,10).join("") 
        === daily.dt_txt.split("").slice(0,10).join("")).length) 

        listStatus.push(newList)
        
    })
return{city, listStatus}
})
export const weatherSlice = createSlice({

    name: 'weather',
    initialState: {
        theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
        cityWeatherStatus: "",
        cityName: "",
        coord: {},
        status:"",

        currentWeatherStatus: "",
        currentWeatherData: {},

        dailyWeatherStatus: "",
        cityWeatherData: "",
        dailyWeather: {},

    },
    reducers: {
        locationData: (state, action) => {
            state.coord = action.payload
        },
        setChangeTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", state.theme)
        }
    },



    extraReducers: (builder) => {
        //fetchCity

        builder.addCase(fetchCity.pending, (state) => {
            state.cityWeatherStatus = "loading"
        })
        builder.addCase(fetchCity.fulfilled, (state, action) => {
            const { coord, cityName } = action.payload
            state.coord = coord
            state.cityName = cityName
            state.cityWeatherStatus = "successed"
        })

        builder.addCase(fetchCity.rejected, (state, action) => {
            state.cityWeatherStatus = "failed"
            state.error = action.error.message
        })

        //fetchCityData


        builder.addCase(fetchCityData.pending, (state)=>{
            state.currentWeatherStatus = "loading"

        })

        builder.addCase(fetchCityData.fulfilled, (state, action)=>{
            state.currentWeatherData = action.payload
            state.currentWeatherStatus="successed"
        })


        builder.addCase(fetchCityData.rejected, (state, action)=>{
            state.currentWeatherStatus="failed"
            state.error = action.error.message
        })

        //dailywEATHER

        builder.addCase(fetchDailyData.pending, (state, aciton)=>{
            state.dailyWeatherStatus ="loading"
        })

        builder.addCase(fetchDailyData.fulfilled, (state, action)=>{
            const {listStatus, city} = action.payload
            state.cityWeatherData=city
            state.dailyWeather=listStatus
            state.dailyWeatherStatus="successed"

        } )

        builder.addCase(fetchDailyData.rejected, (state)=>{
            state.dailyWeatherStatus = "failed"
        })
    }
})
export const {setChangeTheme, locationData} = weatherSlice.actions
export default weatherSlice.reducer