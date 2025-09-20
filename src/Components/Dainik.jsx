import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { div } from 'framer-motion/client'

const Dainik = () => {
  return (
     <div className='flex justify-center px-5 mt-10 w-full h-full'>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14 pb-10'>
                <li className='max-w-40' >
                <NavLink
                to="/denikpanchang"
                >
                <img src={assets.DenikPanchang} className='object-fit' />
                <p className='text-center text-sm bg-blue-600 text-white'>DenikPanchang</p>
                </NavLink>
                </li>

                <li className='max-w-40 bg-white' >
                <img src={assets.Kundali} className='object-fit' />
                <p className='text-center bg-white  text-sm'>Kundali</p>
                </li>

                <li className='max-w-40 bg-white' >
                  <img src={assets.MatchKundali} className='object-fit h-40'/>
                  <p className='text-center bg-white  text-sm'>MatchKundali</p>
                </li>

                <li className='max-w-40  bg-white flex flex-col justify-between' >
                  <img src={assets.LiveChat} className='object-fit' />
                  <p className='text-center bg-white text-sm'>LiveChat</p>
                </li>
            </ul>
    </div>
  )
}

export default Dainik