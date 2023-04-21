import React from 'react'
import CheckoutIndex from '../components/checkout'
import { Meta } from '../components/common'

export default function Checkout() {

  return (
    <div>
        <Meta title={'Secure Checkout'}/>
        <div className="w-100">
            <CheckoutIndex/>
        </div>
    </div>
  )
}
