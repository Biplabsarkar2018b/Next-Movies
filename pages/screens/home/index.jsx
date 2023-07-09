import Footer from '@/pages/components/footer'
import Header from '@/pages/components/header'
import HeroBanner from '@/pages/components/herobanner'
import React from 'react'
import Trending from './Trending'

const HomePage = () => {
  return (
    <div className='relative'>
        <Header/>
        <HeroBanner/>
        <Trending/>
        <Footer/>
    </div>
  )
}

export default HomePage