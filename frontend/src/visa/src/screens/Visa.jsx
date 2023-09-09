import React, { useEffect } from "react";
import { Header, Meta } from "../components/common";
import VisaIndex from "../components/visa";

export default function Visa() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <>
      <Meta title={"Visa"} />
      <div>
        <VisaIndex />
      </div>
      <Header type="passport" />
    </>
  );
}
