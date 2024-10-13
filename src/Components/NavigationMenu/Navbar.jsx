import React from 'react'
import TopHeader from './TopHeader'
import MiddleNav from './MiddleNav'
import MainMenu from './MainMenu'

const Navbar = () => {
  return (
    <div className='w-[100vw] bg-green-400 z-20'>
      <TopHeader/>
      <MiddleNav/>
      <MainMenu className="sticky top-0" />
    </div>
  )
}

export default Navbar