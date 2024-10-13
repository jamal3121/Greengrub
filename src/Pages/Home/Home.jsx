import React from 'react'
import Navbar from '../../Components/NavigationMenu/Navbar'
import HomeCarousel from '../../Components/HeroSection/HomeCarousel'
import Discover from '../../Components/Discover/Discover'
import Service from '../../Components/Service/Service'
import Category from '../../Components/Category/Category'
import { banner2 } from '../../Data/bannerAndLogoData'
import Banner from '../../Components/Banner/Banner'
import FreshProductSection from '../../Components/FreshProduct/FreshProductSection'
import Testimonial from '../../Components/Testimonial/Testimonial'
import SpecialOffer from '../../Components/SpecialOffer/SpecialOffer'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <HomeCarousel className="z-10"/>
        <Discover className='z-10' />
        <Service/>
        <Category className="mt-10" />
        <Banner/>
        <FreshProductSection/>
        <Testimonial/>
        <SpecialOffer/>

    </div>
  )
}

export default Home