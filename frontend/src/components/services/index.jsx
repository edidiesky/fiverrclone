import React from 'react'
import GigsIndex from './gigs'
import HeaderIndex from './header'
import PaginationIndex from './pagination'
import TopHeader from './top'

export default function Servicesindex() {
  return (
    <div>
      <HeaderIndex/>
      <div className="w-90 auto flex column gap-2 py-6">
        <TopHeader/>
        <GigsIndex/>
        <PaginationIndex/>
      </div>
    </div>
  )
}
