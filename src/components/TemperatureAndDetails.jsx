import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature ,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  }
  from "@iconscout/react-unicons";
function TemperatureAndDetails() {
  return <div>
    <div className=' flex items-center justify-center py-6 text-xl text-cyan-400 font-bold'>
      <p> Cloudy</p>
    </div>

    <div className=' flex flex-row items-center justify-between text-white py-3'>
      <img src="https://cdn4.iconfinder.com/data/icons/weather-204/100/SunCloudCloudRRain-512.png" 
      alt="" 
      className=' w-20'/>
      <p className='text-3xl text-white'> 69°</p>
      <div className=' flex flex-col space-y-2'>
        <div className=' flex font-light text-sm items-center justify-center'>
          <UilTemperature size={20} className=" mr-2"/>
          Real feel:
          <span className=' font-medium ml-1'> 32°</span>
        </div>
        <div className=' flex font-light text-sm items-center justify-center'>
          <UilTear size={20} className=" mr-2"/>
          Humidity:
          <span className=' font-medium ml-1'> 69%</span>
        </div>
        <div className=' flex font-light text-sm items-center justify-center'>
          <UilWind size={20} className=" mr-2"/>
          Wind:
          <span className=' font-medium ml-1'> 35km/hr°</span>
        </div>
      </div>
    </div>

    <div className=' flex flex-row items-center justify-center
    space-x-2 text-white text-sm py-5'>
      <UilSun />
      <p className=' font-light'>
        Rise: <span className=' font-medium ml-1'> 06:45 AM</span>
      </p>
      <p className=' font-light'>|</p>
      <UilSunset />
      <p className=' font-light'>
        Set: <span className=' font-medium ml-1'> 07:45 PM</span>
      </p>
      <p className=' font-light'>|</p>
      <UilSun />
      <p className=' font-light'>
        High: <span className=' font-medium ml-1'> 45°</span>
      </p>
      <p className=' font-light'>|</p>
      <UilSun />
      <p className=' font-light'>
        Low: <span className=' font-medium ml-1'> 28°</span>
      </p>
      <p className=' font-light'>|</p>
    </div>
  </div>
}

export default TemperatureAndDetails