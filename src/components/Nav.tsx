import React, { useState } from 'react'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { ApiService } from '../API/api.service';
import { Weather } from '../interfaces/weather.interface';
import WeatherPanel from './WeatherPanel';


const Nav = () => {

    const apiService = new ApiService()
    const [city, setCity] = useState("")

    const defaulData : Weather = {
        name: "San Salvador",
        main: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_min: 0,
        },
        weather: [
            {
            description: ""
            }
        ],
        wind: {
            speed: 0
        },
        visibility: 0,
    }

    const [show, setShow] = useState(false)
    const [weather, setWeather] =  useState<Weather>(defaulData)
    const onSubmit = async (e) => {
        e.preventDefault()
        if (city === "" || !city) return;
        const weatherData = await apiService.getData("weather", city)
        setWeather(weatherData)
        setShow(true)
        const forecastData = await apiService.getData("forecast", city)
    }
    return (
        <>
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex bg-gray-200 py-4 px-4 justify-center'>
                <div className="flex justify-center">
                    <form onSubmit={onSubmit}>
                    <div className="xl:w-96 mr-4">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-2">
                            <input type="search" onChange={(e) => setCity(e.target.value)} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" placeholder="Search city" aria-label="Search" aria-describedby="button-addon2" />
                            <button className="btn inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-md leading-tight rounded-md shadow-md hover:bg-gray-300 hover:bg-opacity-3 focus:outline-none focus:ring-0 flex items-center" type="submit" id="button-addon2">
                                Search
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="flex items-center w-8 h-8 mr-4">
                    <button className="btn px-1 py-1 rounded-md hover:bg-gray-100 hover:bg-opacity-3 flex items-center" type="button" id="button-addon2">
                        <NearMeOutlinedIcon/>
                    </button>
                </div>
                <div className="flex items-center w-40 h-8 mr-4">
                    <button className="btn px-1 py-1 text-xs bg-gray-500 rounded-md hover:bg-gray-100 hover:bg-opacity-3 flex items-center" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" id="button-addon2">
                        Different Weather?
                    </button>
                </div>
            </div>
        </div>
        <WeatherPanel
            weather={weather}
            showData = {show}
        />
        </>
    )
}

export default Nav

