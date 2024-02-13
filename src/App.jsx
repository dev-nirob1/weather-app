import { useState } from 'react'
import './App.css';
function App() {
  const [city, setCity] = useState('dhaka')

  const handleSearch = event => {
    event.preventDefault()
    const cityName = event.target.value.city;
    console.log(city, cityName)
  }

  return (
    <>
      <div className="grid-container">
        <aside className="left">
          <div className="search-bar">
            <input type="text" className="search-input" name="city" placeholder="City Name" />
            <button onClick={()=>handleSearch(setCity(cityName))} className="search-btn">Search</button>
          </div>
        </aside>

        <div className="right">
          hi
        </div>
      </div>
    </>
  )
}

export default App
