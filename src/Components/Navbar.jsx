import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import { AnimatePresence, motion} from 'framer-motion';
import { RxCross2 } from "react-icons/rx";
{/* <CiMenuKebab /> */}


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=' bg-[#ff7811] flex justify-center z-50 top-0 items-center p-1.5 fixed w-full'>

    {/* Mobile View */}
        <div className='sm:hidden'>
            <AnimatePresence>
            {isOpen &&(
                <motion.div
                initial={{ opacity: 0, x:-20 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className='w-44 h-screen bg-orange-200 fixed top-0 left-0 p-5 z-50 shadow-lg shadow-orange-900 flex flex-col'
                >
                <button className='text-xl mb-5 font-bold'
                 onClick={()=> setIsOpen(false)}><RxCross2/></button>

                 <div>
                    <ul className='mt-2'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus">Contact Us</NavLink>
                    </li>
                </ul>
                 </div>
                </motion.div>
            )}</AnimatePresence>
        </div>

    {/* desktop View */}

        <div className=' flex flex-wrap justify-between max-sm:py-2 items-center w-full sm:px-5'>
            <div className='flex sm:flex-col'>
                 <button onClick={() => {setIsOpen(!isOpen)}} className='text-xl sm:hidden pr-2'><RiMenu3Fill /></button>
                <h1 className=' text-white sm:text-3xl text-xl font-bold'>AstroManch</h1>
                <ul className='hidden text-lg sm:flex gap-5 mt-2'>
                    <li>
                        <NavLink 
                        to="/"
                        className={({isActive})=>` ${isActive ? "text-black font-semibold":" text-white"}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/aboutus"
                        className={({isActive})=>`${isActive ? "text-black font-semibold":" text-white"}`}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="/contactus"
                        className={({isActive})=>`${isActive ? "text-black font-semibold":" text-white"}`}
                        >
                        Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div> 
            <div className='flex sm:gap-5 gap-3'>
                 <select className='rounded sm:text-base text-sm bg-orange-200/80 
                 border border-orange-200 outline-none'>
                    <option value="">English</option>
                    <option value="">हिंदी</option>
                </select>

                <button className='w-full text-center bg-green-600 shadow-lg
                    hover:scale-105 cursor-pointer duration-300 transition-all shadow-orange-900 
                    sm:px-5 px-4 py-1.5  sm:text-lg rounded text-white'>
                    Login
                </button>   
            </div>
        </div>
    </header>
  )
}

export default Navbar