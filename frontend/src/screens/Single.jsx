import React, {useEffect} from 'react'
import SingleIndex from '../components/single'

export default function Single() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <SingleIndex/>
    </div>
  )
}
