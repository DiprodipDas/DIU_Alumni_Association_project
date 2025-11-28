import React from 'react'
import HeroSection from './HeroSection'
import ToolSection from './ToolSection'
import CompanyLogos from './CompanyLogos'
import Services from './Services'
import Testimonials from './Testimonials'
import Blogs from './Blogs'
import TeamSection from './TeamSection'
import Pricing from './Pricing'
import FAQs from './FAQs'
import Newsletter from './Newsletter'
import AlumniAcordians from './AlumniAcordians'
import UpEvents from './UpEvents'

const Home = () => {
  return (
    <>
    <AlumniAcordians></AlumniAcordians>
    <HeroSection></HeroSection>
    <UpEvents></UpEvents>
    <ToolSection></ToolSection>
    <CompanyLogos></CompanyLogos>
    <Testimonials></Testimonials>
    <Blogs></Blogs>
    <TeamSection></TeamSection>
    <Pricing></Pricing>
    <FAQs></FAQs>
    <Newsletter></Newsletter>
    </>
  )
}

export default Home