import React from 'react'
import MainInfo from './SellerInfoBottom'
import OtherInfo from './SellerInfoTop'
import UserIndex from './user';

export default function ProfileLeftIndex() {
  let userInfo = "user";
  if (userInfo === 'user') {
    return (
      <UserIndex/>
    )
  }
  return (
    <div className='flex w-100 column gap-2'>
      <MainInfo/>
      <OtherInfo/>
    </div>
  )
}
