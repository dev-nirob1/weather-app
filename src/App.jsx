import { useQuery } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'
import { useState } from 'react'
import Loader from './components/Loader'

function App() {
  const [city, setCity] = useState('')

  const { data: weather, isLoading, isError } = useQuery({
    queryKey: ['weather', city],
    queryFn: async () => {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_apiKeys}&units=metric`)
      return res.data
    },
    enabled: !!city
  })
  const { data: forecast, isLoading: forecastLoading, isError: forecastError } = useQuery({
    queryKey: ['forecast', city],
    queryFn: async () => {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_apiKeys}&units=metric`)
      return res.data
    },
    enabled: !!city
  })

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCity(input)
  }
  console.log(forecast?.list, forecastLoading, forecastError);
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-[#266986] via-[#0b5677] to-[#227b9e] text-white font-semibold'>
      <div className="container mx-auto h-full py-4 px-3 md:px-0">
        <div className='max-w-xl mx-auto h-full text-neutral-900 relative'>
          <input
            onChange={handleInputChange}
            defaultValue={city}
            type="search"
            className='w-full rounded p-2 ring-0'
            placeholder='Search By City' />

          {isLoading && <Loader />}
          {/* {
            suggestions.length === 0 ?
              <p className="text-white">No cities found</p>
              :
              <ul className='absolute top-8 left-0 w-full mt-2 flex flex-col gap-1'>
                {
                  suggestions.map((item, i) => <li className='bg-gradient-to-br from-[#012534] to-[#51143D] rounded text-white p-2 z-50 cursor-pointer' onClick={() => handleSuggetionInput(item)} key={i}>{item.name}, {item.state || ''}, {item.country}</li>)
                }
              </ul>
          } */}

        </div>

        {
          !isLoading && !weather && !city && (<p className='h-[50vh] text-center rounded flex items-center justify-center capitalize'> Please search your location by city name</p>)
        }
        {/* weather  */}
        {
          (!isLoading && !isError && weather) && <div className='grid grid-cols-1 md:grid-cols-2 justify-content-center gap-2 md:gap-5 mt-10'>
            <div className='bg-white/10 rounded-md p-5 text-center'>
              <h2 className='text-3xl'>{weather?.name}</h2>
              <img
                src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
                alt={weather?.weather[0]?.description}
                className="w-24 h-24 mx-auto"
              />
              <h2 className='text-4xl'>{weather?.main?.temp} &deg;C</h2>
              <p className='capitalize'>{weather?.weather[0]?.description}</p>
            </div>
            <div className='rounded flex flex-row md:flex-col gap-2 md:gap-5'>
              <div className='bg-white/10 p-5 rounded-md text-center flex-1'>
                <p className='text-xl'>{weather?.wind?.speed} Kph</p>
                <h3 className='text-2xl'>Wind speed</h3>
              </div>
              <div className='bg-white/10 p-5 rounded-md text-center flex-1'>
                <p className='text-xl'>{weather?.main?.humidity}%</p>
                <h3 className='text-2xl'>Humidity</h3>
              </div>
            </div>
          </div>
        }

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mt-10'>
          {forecast && forecast?.list?.map((item, i) => <div key={i} className='border rounded-md p-3'>
            <div>
              <h3 className='text-3xl'>{item?.main?.temp}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                alt={item?.weather[0]?.description}
                className="w-24 h-24 mx-auto"
              />
              <p className='text-lg'>{item?.weather[0]?.main}</p>
            </div>
          </div>
          )}


        </div>
      </div>
    </div>
  )
}

export default App
