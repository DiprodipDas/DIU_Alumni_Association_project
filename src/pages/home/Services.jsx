//Not Used right now

import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import {FiCalendar,FiCompass,FiTruck, FiActivity } from "react-icons/fi";


const services=[
  {
      icon: FiCalendar,
      title:"Customizable Settings",
      description:"Easily configure tools to fit your project requirements"
  },
  {
      icon: FiCompass,
      title:"Developer-Friendly",
      description:"Easily configure tools to fit your project requirements"
  },
  {
      icon: FiActivity,
      title:"Responsive Design",
      description:"Easily configure tools to fit your project requirements"
  },
  {
      icon: FiTruck,
      title:"Cloud Integration",
      description:"Easily configure tools to fit your project requirements"
  },
  
]

const Services = () => {
  return (
    <div className='max-w-screen-2xl container bg-white mx-auto py-20 px-5'>
        <HeadingSection heading='Explore Our Range of Professional Services Tailored to Meet Your Business Needs.' subheading='Services' description='Lorem Ipsum is standard placeholder text, or "dummy text," used in graphic design, publishing, and web development to demonstrate the visual  form of a document or layout without the distraction of meaningful content or layout without the distraction of meaningful content or layout without the distraction of meaningful content'/>
    
    
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-4/5 mx-auto mb-16'>
        {
          services.map((service,index)=>(
            <div key={index} className='flex flex-col items-center text-center p-6 hover:shadow-xl hover:rounded-md transition cursor-pointer'>
              <service.icon className='text-blue-600 text-4xl mb-4'/>
              <p className='text-gray-600 mt-2 md:px-10'>{service.description}</p>
            </div>
          ))
        }

    </div>

     <div className='text-center'>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-md 
                         hover:bg-amber-400 transition'>
                            Explore More
                          </button>
        </div>

    </div>
  )
}

export default Services