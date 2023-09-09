import React from 'react'
import { Banner2 } from '../common'
import Experience from './Experience'
import Faq from './Faq'
import Hero from './Hero'
import Help from './Help'
import './index.css'
import Plans from './Plans'
import Testimonials from './Testimonials'


export default function PassportIndex() {
  return (
    <div>
      <Hero/>
      <Experience/>
      <Help/>
      <Plans/>  
      <Testimonials/>
      <Banner2 text={'Get your passport delivered to you'} subText={'make a resrevation today'}/>
      <Faq/>
    </div>
  )
}
