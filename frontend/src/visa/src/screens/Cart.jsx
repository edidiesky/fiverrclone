import React, { useEffect } from 'react'
import Cartindex from '../components/cart copy'

export default function Cart() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <div style={{ margin: "10rem 0" }}>
      <Cartindex/>
    </div>
  )
}
