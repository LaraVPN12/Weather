import CloudIcon from '@mui/icons-material/Cloud';
import { convertion } from '../helpers/KelvintoCelcius';
import { metersConvertion } from '../helpers/MeterstoKilometers';
import Spinner from './Spinner';


const WeatherPanel = ({ weather, showData }) => {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

    return (
        <>
            {
                showData === true ? (
                    <div className="max-w-4xl max-h-36 block py-34">
                        <div className="max-w-xs grid gap-x-6 gap-y-6">
                            <div className="flex flex-col py-3 px-3">
                                <div className="block">
                                    <span className="text-md text-red-500">{date}</span>
                                    <h2 className="text-3xl font-semibold">{weather.name}</h2>
                                </div>
                                <div className="flex flex-row justify-start items-center">
                                    <CloudIcon color="inherit" fontSize="large" />
                                    <span className="ml-4 text-6xl text-gray-700">{`${parseFloat(convertion(weather.main.temp).toFixed(1))}°C`}</span>
                                </div>
                                <div className="block font-semibold mt-2">
                                    <span className='mr-2'>
                                        {`Feels like ${parseFloat(convertion(weather.main.feels_like).toFixed(1))}°C`}
                                    </span>
                                    <span>
                                        {`${weather.weather[0].description} `}
                                    </span>
                                </div>
                                <ul className="border-l-2 border-l-orange-500 flex flex-wrap px-5 max-w-sm">
                                    <li className="text-sm text-gray-700 flex flex-nowrap justify-center items-center mr-6">
                                        {`${weather.wind.speed} m/s`}
                                    </li>
                                    <li className="text-sm text-gray-700 flex flex-nowrap justify-center items-center mr-6">
                                        {`${weather.main.humidity} hPa`}
                                    </li>
                                    <li className="text-sm text-gray-700 flex flex-nowrap justify-center items-center mr-6">
                                        {`Humidity ${weather.main.humidity}%`}
                                    </li>
                                    <li className="text-sm text-gray-700 flex flex-nowrap justify-center items-center mr-6">
                                        {`Dew Point: ${parseFloat(convertion(weather.main.temp_min).toFixed(1))}°C`}
                                    </li>
                                    <li className="text-sm text-gray-700 flex flex-nowrap justify-center items-center mr-6">
                                        {`Visibility: ${parseFloat(metersConvertion(weather.visibility).toFixed(1))} km`}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ):(
                    <div className="flex flex-col items-center justify-center">
                        <>
                            <Spinner />
                        </>
                    </div>
                    )
            }
            
        </>
    )
}

export default WeatherPanel
