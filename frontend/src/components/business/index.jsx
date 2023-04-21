import React from 'react'
import Copyright from '../common/Copyright'
import FaqIndex from './faq'
import FooterIndex from './footer'
import HeaderIndex from './header'
import HeroIndex from './hero'
import PopularIndex from './popular'
import StoriesIndex from './stories'
import TestimonialIndex from './testimonial'

export default function BusinessIndex() {
  return (
    <div>
      <div className="w-100 flex gap-3 column">
        <HeaderIndex/>
        <HeroIndex/>
        <PopularIndex/>
        <StoriesIndex/>
        <FaqIndex/>
        <TestimonialIndex/>
        <FooterIndex/>
        <Copyright/> 
      </div>
    </div>
  )
}
