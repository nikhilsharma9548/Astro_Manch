import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='mt-24 bg-black md:h-[550px] xl:h-[600px] h-screen rounded-xl
     border-[#ff7811] border-2 shadow-2xl overflow-hidden 
     flex justify-center items-center relative'>
      
      <img 
        src={assets.hero} 
        alt="Hero"
        className="h-full object-fit max-sm:w-96 max-sm:h-96 hero animate-spin opacity-50 absolute"
        style={{ animation: "spin 20s linear infinite" }}
      />

      <button 
        className='absolute bg-orange-500 px-2 py-1.5 rounded text-xl transition-transform 
        duration-300 ease-in-out hover:scale-105 hover:bg-white'>
        Chat Now
      </button>
    </div>
  )
}

export default Hero
