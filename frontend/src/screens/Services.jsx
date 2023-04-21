import React, {useEffect} from 'react'
import Servicesindex from '../components/services'

export default function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Servicesindex/>
    </div>
  )
}
