import React from 'react'
import HeadingSection from '../../components/HeadingSection'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaFacebook,FaTwitterSquare,FaInstagramSquare} from "react-icons/fa";

const teamMembers=[
    {
        id:1,
        image:"https://diu.ac/assets/images/foun.jpg",
        name: "Late Alhaj Professor Dr. A.B.M. Mafizul Islam Patwari",
        role: "Founder Chairman, Dhaka International University",
        linkedin: "https://linkedin.com/in/johnabraham",
        instagram:"https://instagram.com/johnabraham",
        twitter:"https://twitter.com/johnabraham",
        facebook:"https://facebook.com/johnabraham",
    },
    {
        id:2,
        image:"https://api.diu.ac/images/profile_photo_file_245.jpg",
        name: "Shameem Haider Patwary",
        role: "Chairman, BOT, Dhaka International University",
        linkedin: "https://linkedin.com/in/jamesmith",
        instagram:"https://instagram.com/jamesmith",
        twitter:"https://twitter.com/jamesmith",
        facebook:"https://facebook.com/jamesmith",
    },
    {
        id:3,
        image:"https://api.diu.ac/images/profile_photo_file_46.jpeg",
        name: "Dr. S. Quadir Patwari",
        role: "Vice-Chairman, BOT, Dhaka International University",
        linkedin: "https://linkedin.com/in/yanimusi",
        instagram:"https://instagram.com/yanimusi",
        twitter:"https://twitter.com/yanimusi",
        facebook:"https://facebook.com/yanimusi",
    },
    {
        id:4,
        image:"https://api.diu.ac/images/profile_image_upload_222.jpg",
        name: "Md. Masud Parvej Patoari",
        role: "Joint Director,IT & Admission & Information,Dhaka International University",
        linkedin: "https://linkedin.com/in/hilary",
        instagram:"https://instagram.com/hilary",
        twitter:"https://twitter.com/hilary",
        facebook:"https://facebook.com/hilary",
    },
]

const TeamSection = () => {
  return (
    <div className='bg-gray-100'>
        <div className='max-w-screen container mx-auto py-20 px-5'>
         <HeadingSection heading='Meet Our Advisory Panel' subheading='Advisory Panel'/>


         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                teamMembers.map((teamMember,index)=>(
                    <div key={teamMember.id} className='bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl'>

                        <img src={teamMember.image} alt={teamMember.name} className='w-full h-90 object-cover' />

                        <div className='p-5'>
                         <h3 className='text-xl font-semibold text-gray-800 mb-2'>{teamMember.name}</h3>
                         <p className='text-sm text-gray-500 mb-4'>{teamMember.role}</p>

                         <div className='flex space-x-4 mb-5 items-center'>
                            <Link to={teamMember.linkedin} className='text-blue-600 hover:text-yellow-900'><FaLinkedin /></Link>
                            <Link to={teamMember.facebook} className='text-blue-600 hover:text-yellow-900'><FaFacebook /></Link>
                            <Link to={teamMember.twitter} className='text-cyan-600 hover:text-yellow-900'><FaTwitterSquare /></Link>
                            <Link to={teamMember.instagram} className='text-red-400 hover:text-yellow-900'><FaInstagramSquare /></Link>
                         </div>
                         <button className='bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300 cursor-pointer'>Show More</button>
                        </div>
                    </div>
                ))
            }
         </div>
        </div>
    </div>
  )
}

export default TeamSection