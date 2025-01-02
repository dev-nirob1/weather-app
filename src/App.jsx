
import './App.css'

function App() {

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#012534] to-[#51143D] text-white font-semibold'>
      <div className="container mx-auto py-4 px-3 md:px-0">

        <div className='max-w-xl mx-auto text-neutral-900 '>
          <input type="search" className='w-full rounded py-[6px] px-2 ring-0' placeholder='Search By City' />
        </div>

        {/* weather  */}
        <div className='grid grid-cols-1 md:grid-cols-2 justify-content-center gap-2 md:gap-5 mt-5'>
          <div className='bg-white/10 rounded-md p-5 text-center'>
            <h2>CityName</h2>
            <h2>Icon</h2>
            <h2>36 degree</h2>
            <h4>Clear Sky</h4>
          </div>
          <div className='rounded flex flex-row md:flex-col gap-2 md:gap-5'>
            <div className='bg-white/10 p-5 rounded-md text-center flex-1'>
              <h3>Wind speed</h3>
              <p>2.34kph</p>
            </div>
            <div className='bg-white/10 p-5 rounded-md text-center flex-1'>
              <h3>Humidity</h3>
              <p>36%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
