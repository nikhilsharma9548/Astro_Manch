import { div } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
         <div className='bg-black flex flex-wrap justify-center py-5 font-[Arial] p-2'>
        <div className=' text-white w-[900px] flex flex-wrap justify-between'>
            <div className='text-sm'>
                <p className=' text-[wheat] text-xl font-semibold underline p-1 mb-2'>Social Meadia</p>
                <p>Whatsapp: <span>9876543210</span></p>
                <p>Email: <span>example@gmail.com</span></p>
                <p>Instragram: <span>example_123</span></p>
                <p>Facebook: <span>example</span></p>
            </div>
            <div>
                <p className=' text-[wheat] text-xl underline p-1 font-semibold mb-2'>Links</p>
                <ul className='text-sm'>
                    <li>
                        <NavLink 
                        to="/"
                        className={({isActive})=>`${isActive ? "":" text-white"}
                         hover:text-blue-600 hover:underline`}
                        >
                          Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/aboutus"
                        className={({isActive})=>` ${isActive ? "  text-[#848080] underline hover:no-underline":" text-white"}
                         hover:text-blue-600 hover:underline`}
                        >
                          About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/contactus"
                        className={({isActive})=>`  ${isActive ? "  text-[#848080] underline hover:no-underline":" text-white"}
                         hover:text-blue-600 hover:underline`}
                        >
                        Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/"
                        className={({isActive})=>`  ${isActive ? "":" text-white"}
                         hover:text-blue-600 hover:underline`}
                        >
                        Help
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='text-sm'>
                <p className=' text-[wheat] text-xl font-semibold underline p-1'>Address:</p>
                <p className=''>Mohalla Bahar Dahlan,<br />Soron Shukar Kshetra <br />Distric: Kasganj <br />Pincode: 207403</p>
            </div>
        </div>
       
    </div>
 <p className='text-sm md:text-base text-white text-center p-2 bg-black'>© 2025 Nikhil Sharma | All Rights Reserved</p>
    </footer>
  )
}

export default Footer