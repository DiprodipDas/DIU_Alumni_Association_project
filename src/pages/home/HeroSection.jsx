import React, { useState } from 'react'
import { FiArrowRight } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";

import bannerImg from '../../assets/banner2.jpg'

const HeroSection = () => {
  const [showModal, setShowModa] = useState(false);

  const openModal = () => setShowModa(true);
  const closeModal = () => setShowModa(false);
  return (
    <div className='bg-gray-50'>
      <div className='max-w-screen-2xl container mx-auto py-20 px-5 flex flex-col lg:flex-row justify-between items-center'>
        {/*Left Side */}
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>From connecting you with 25,000+ alumni worldwide</h1>
          <p className='text-lg text-gray-600 mb-6'>to bringing you the latest Dhaka International University stories, we helps you keep DIU close wherever you are</p>
          <div className='flex flex-col md:flex-row justify-center gap-4 lg:justify-start'>
            <button className='bg-green-600 text-white px-6 py-3 rounded-md 
            flex justify-center items-center space-x-2 hover:bg-red-600 transition'>
              <span>Upcoming Event</span>
              <FiArrowRight />
            </button>
            <button className='border border-green-600 px-6 py-3 rounded-md
             hover:bg-red-600 hover:text-white text-green-600 transition'>Contact Us</button>
          </div>
        </div>

        {/*Right Side */}

        <div className='lg:w-1/2 mt-10 lg:mt-0 flex justify-end relative'>
          <div className='relative group'>
            <img src={bannerImg} alt="banner image" className='rounded-lg shadow-lg' />
            <button className='absolute inset-0 flex items-center justify-center 
            rounded-lg group-hover:opacity-75 transition z-0'>
              <FaRegPlayCircle onClick={openModal} className='text-white text-5xl hover:text-blue-600' />
            </button>
          </div>
        </div>
        {
          showModal && (<div className='fixed inset-0 flex items-center justify-center bg-blend-overlay bg-black z-50 '>

            <div className='bg-white p-5 rounded-lg shadow-lg relative max-w-xl w-full'>

              <button onClick={closeModal} >&times;</button>
              <iframe className='w-full aspect-video' width="560" height="315" src="https://www.youtube.com/embed/eksTu9IFnXE?si=rw-4lgEK1nAR4ObW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

export default HeroSection