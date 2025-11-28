import React from 'react'
import HeadingSection from '../../components/HeadingSection'

const blogs=[
    {
        id: 1,
        image: "/images/blogs/blog1.png",
        category:"Technology",
        title: "How AI is shaping the future of web development",
        description: "Discover how artificial inteligence is transforming the way we build and design websites.",
        authorImage:"/images/authors/author1.png",
        authorName:"John Due",
        authorRole:"Tech Bloger",
    },
    {
        id: 2,
        image: "/images/blogs/blog2.png",
        category:"Design",
        title: "10 tips for Creating Stunning UI/UX Design ",
        description: "Learn the secret to designing user interfaces that captivate and convert users.",
        authorImage:"/images/authors/author2.png",
        authorName:"Maria D Costa",
        authorRole:"UX Designer",
    },
    {
        id: 3,
        image: "/images/blogs/blog3.png",
        category:"Automation",
        title: "How to fit yourself in the automation world",
        description: "Discover how automation simplify your day to day task easily.Step up for enriched your automation knowledge in the next level.",
        authorImage:"/images/authors/author3.png",
        authorName:"Mr Lorem",
        authorRole:"Automation Engineer",
    },
    {
        id: 1,
        image: "/images/blogs/blog4.png",
        category:"DevOps",
        title: "The most important things you must need to know for being a DevOps Engineer.",
        description: "DevOps world is huge. To make yourself as a successfull devops engineer you must polish your foundation",
        authorImage:"/images/authors/author4.png",
        authorName:"Mark Tonny",
        authorRole:"DevOps Engineer",
    },
]

const Blogs = () => {
  return (
    <div className='max-w-screen container mx-auto py-20 px-5'>
        <HeadingSection heading='Latest Articles and Insights' subheading='Our Blogs'/>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
              blogs.map((blog)=>(
                <div key={blog.id} className='bg-white shadow-md rounded-lg overflow-hidden cursor-pointer'>
                    <img src={blog.image} alt={blog.title} className='w-full h-48 object-cover hover:scale-105 transition transform' />

                    <div className='p-5'>
                      <p className='text-sm text-blue-500 font-medium uppercase mb-2'>{blog.category}</p>
                       <h3 className='text-xl font-bold text-gray-800 mb-3'>{blog.title}</h3>
                       <p className='text-sm text-gray-600 mb-5'>{blog.description}</p>


                       <div className='flex items-center space-x-3'>
                        <img src={blog.authorImage} alt={blog.authorName} className='w-10 h-10 rounded-full object-cover' />
                        <div>
                            <h4 className='text-sm font-bold text-gray-800'>{blog.authorName}</h4>
                            <p className='text-xs text-gray-500'>{blog.authorRole}</p>
                        </div>
                       </div>
                    </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Blogs