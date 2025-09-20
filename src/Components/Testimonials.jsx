import React, { useState } from 'react'
import { reviews } from '../assets/assets';
import { IoStarSharp } from "react-icons/io5";
import { BsArrowLeftCircle } from "react-icons/bs";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };
    return (
      <div className="flex flex-col items-center justify-center p-4 w-ful overflow-hidden">

        <p className='text-2xl shadow-lg shadow-gray-800 bg-white px-4 py-1.5 mb-10 rounded'>Customer Review and Astrologer</p>

        {/* Slider Container */}
       <div className='flex max-md:flex-col gap-5 md:gap-24'>
         <div className="relative max-w-[320px] h-[450px] bg-white flex items-center rounded overflow-hidden 
        shadow-lg border-gray-500 border-2 transition-transform duration-300 ease-in-out">
          <div className=" h-full w-full flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 320}px)`,}}
          >
            {reviews.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[320px] p-2 "
              >
                <div className=" h-[50%] flex justify-center items-center">
                  <div className=" h-[85%] w-[55%] rounded-md border-black border-2 overflow-hidden"></div>
                </div>
                <p className=" text-red-600 font-bold font-sans text-center text-xl">{item.name}</p>
                <p className=" text-sm text-gray-600 text-center font-[Cursive]">From : {item.city}</p>
                <p className=" text-xl underline font-bold">Review</p>
                <p>{item.review}</p>
                  <p className='flex mt-5'>
                    {Array.from({ length: 5 }, (_, i) => (
                    <IoStarSharp className='text-orange-600'
                    key={i} filled={i < item.rating} />
                  ))}
                  </p>
              </div>
            ))}
          </div>
          <div className="flex justify-between absolute  w-full px-2">
          <button
            onClick={prevSlide}
            className=" text-2xl bg-gray-300 rounded-full hover:bg-gray-400 hover:text-white opacity-50"
          >
            <BsArrowLeftCircle/>
          </button>
          <button
            onClick={nextSlide}
            className="text-2xl rotate-180 bg-gray-300 rounded-full hover:bg-gray-400 hover:text-white opacity-50 "
          >
            <BsArrowLeftCircle/>
          </button>
        </div>
        </div>

            {/* Astrologer card */}

         <div className='w-[320px] h-[450px] border-black border-2 shadow-md bg-white py-5 px-2 rounded 
          transition-transform duration-300 ease-in-out'>
        <div className=' flex justify-center items-center p-2'>
            <img src="" alt=""  className=' h-[200px] w-[180px] border-black border-2 rounded-lg'/>
        </div>
        <h1 className=' mt-2 text-[#ff7821] font-bold text-2xl text-center'>Shubham Mishra Ji</h1>
        <p className=' text-gray-500 text-center font-[Arial]'>Vecik Astrologer</p>
        <p className=' text-center font-[cursive] mt-1 mb-1 text-sm'>
            We are born at a given moment, in a given place, and like vintage years
            of wine, we have the qualities of the year and of the season of which we are born.
        </p>
        <div className=' flex justify-center items-center mt-2'>
            <button className=' bg-green-600 text-lg text-white py-1.5 px-2 rounded
             transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-green-700'>Chat Now</button>
        </div>
    </div>
        
       </div>
      </div>
    );
}

export default Testimonials