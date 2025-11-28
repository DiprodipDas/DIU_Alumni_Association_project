import React from 'react'
import HeadingSection from '../../components/HeadingSection'

const CompanyLogos = () => {
  const logos = [
    { src: "https://i.ibb.co.com/qFk5h8jW/1628077920-P2g-Jew96t-E.png", name: "Universiti Putra Malaysia" },
    { src: "https://i.ibb.co.com/gLJJx7z4/1628138923-Kr-Un-G7ckn-G.png", name: "M Kumarasamy College of Engineering" },
    { src: "https://i.ibb.co.com/FbBcvNSf/1628139004-d1-Q8vo84-Ru.png", name: "Ilia State University" },
    { src: "https://i.ibb.co.com/pBPxWNXT/1628138888-LGO0-TXwurl.png", name: "Ballari Institute of Technology and Management" },
    { src: "https://i.ibb.co.com/fdYMDqdp/1628138908-s6-SF4r-YKv-T.png", name: "Nagarjuna College Of Engineering and Technology" },
    { src: "https://i.ibb.co.com/Q3C4jSMy/1628138940-Wrvjqjv-YT3.png", name: "Pharmacy Council of Bangladesh" },
    { src: "https://i.ibb.co.com/bgs1mnr5/1628138793-q-O1z-Ei2-VPa.png", name: "United Nations Global Compact" },
  ]

  return (
    <div className='bg-gray-100'>
      <div className='max-w-screen container mx-auto py-20 px-5'>
        <HeadingSection
          subheading="Our Partners"
          heading=""
          description=""
        />

        {/* Scrolling Logo Section */}
        <div className='relative overflow-hidden border-y-[1px] p-8'>
          <div className='flex items-center justify-around md:space-x-14 space-x-8 animate-scroll'>
            {logos.map((logo, index) => (
              <div
                key={index}
                className='flex justify-center items-center bg-white rounded-full p-6 w-28 h-28 hover:scale-110 transition transform shadow-sm'
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  className='w-16 h-16 object-contain'
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CompanyLogos
