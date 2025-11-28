import React from 'react'
import HeadingSection from '../../components/HeadingSection';
import { BiSolidGraduation, BiUserCheck, BiUserPlus, BiWorld } from 'react-icons/bi';

const tools = [
{
    icon: BiUserPlus,
    title:"15,029",
    description:"CURRENT STUDENTS"
},
{
    icon: BiWorld,
    title:"92",
    description:"CURRENT FOREIGN STUDENTS"
},
{
    icon: BiUserCheck,
    title:"28,218",
    description:"NUMBER OF ALUMNI"
},
{
    icon: BiSolidGraduation,
    title:"8",
    description:"CONVOCATIONS"
},
]

const ToolSection = () => {
  return (
    <div className='max-w-screen container mx-auto py-20 px-5'>
       <HeadingSection subheading="CURRENT STATISTICS" heading="Numbers that define our legacy and success." />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 cursor-pointer'>
            {
                tools.map((tool,index)=>(
                    <div key={index} className='flex flex-col items-center p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition'>
                        <tool.icon className='text-green-600 text-4xl mb-4'/>
                        <h3 className='text-4xl font-extrabold text-red-600'>{tool.title}</h3>
                        <p className=' text-green-600 font-bold mt-2 text-center'>{tool.description}</p>
                    </div>
                ))
            }
        </div>
        <div className='text-center'>
                <button className='bg-green-600 text-white px-6 py-3 rounded-md 
                         hover:bg-red-600 transition'>
                            Explore More
                          </button>
        </div>
        

    </div>
  )
}

export default ToolSection