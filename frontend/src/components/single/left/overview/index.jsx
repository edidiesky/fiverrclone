import React from 'react'
import Criticism from './Criticism'
import GigInfo from './GigInfo'
import Title from './Title'
import DetailsTopLeft from './Top'
import {Links} from '../../../common'

export default function OverviewIndex() {
  return (
    <div className='flex column w-100 gap-2'>
    <Links step1={'Home'} step2={'Car'}/>
      <Title/>
      <DetailsTopLeft/> 
      <Criticism/>
      <GigInfo/>
    </div>
  )
}

