import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { onSidebar } from '../../../Features';
export default function Bar() {
    const dispatch = useDispatch();
  return (
    <div onClick={()=> dispatch(onSidebar())}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19"><rect y="16" width="23" height="3" rx="1.5" fill="#555"></rect><rect width="23" height="3" rx="1.5" fill="#555"></rect><rect y="8" width="23" height="3" rx="1.5" fill="#555"></rect></svg>
    </div>
  )
}
