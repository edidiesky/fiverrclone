import React, {useEffect} from 'react'
import BusinessIndex from '../components/business'

export default function Business() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
        <BusinessIndex/>
    </div>
  )
}
