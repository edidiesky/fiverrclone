import React, { useEffect } from "react";
import CheckoutIndex from "../components/checkout copy";

export default function Checkout() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <>
      <div className="w-100" style={{ margin: "10rem 0" }}>
        <CheckoutIndex />
      </div>
    </>
  );
}
