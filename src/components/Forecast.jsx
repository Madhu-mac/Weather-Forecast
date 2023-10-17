import React from 'react'

function Forecast({title}) {
  return <div>

    <div className=' flex items-center justify-start mt-6'>
       <p className=' text-white font-medium uppercase'> {title}</p>
    </div>
    <hr className='my-2'/>

    <div className=' flex flex-row items-center justify-between
    text-white '>
      <div className=' flex flex-col items-center justify-center '>
        <p className=' font-light text-sm'>
          04:30 PM
        </p>
      <img src="https://cdn4.iconfinder.com/data/icons/weather-204/100/SunCloudCloudRRain-512.png" 
      className=' w-12 my-1'
      alt="" />
      <p className=' font-medium'> 23°</p>
      </div>
      <div className=' flex flex-col items-center justify-center '>
        <p className=' font-light text-sm'>
          04:30 PM
        </p>
      <img src="https://cdn4.iconfinder.com/data/icons/weather-204/100/SunCloudCloudRRain-512.png" 
      className=' w-12 my-1'
      alt="" />
      <p className=' font-medium'> 23°</p>
      </div>
      <div className=' flex flex-col items-center justify-center '>
        <p className=' font-light text-sm'>
          04:30 PM
        </p>
      <img src="https://cdn4.iconfinder.com/data/icons/weather-204/100/SunCloudCloudRRain-512.png" 
      className=' w-12 my-1'
      alt="" />
      <p className=' font-medium'> 23°</p>
      </div>
      <div className=' flex flex-col items-center justify-center '>
        <p className=' font-light text-sm'>
          04:30 PM
        </p>
      <img src="https://cdn4.iconfinder.com/data/icons/weather-204/100/SunCloudCloudRRain-512.png" 
      className=' w-12 my-1'
      alt="" />
      <p className=' font-medium'> 23°</p>
      </div>
    </div>
  </div>
}

export default Forecast