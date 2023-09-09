import React, { useEffect } from "react";
import CartIndex from "../components/cart";
import { Meta } from "../components/common";
export default function Cart() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <>
    <Meta title="Shopping Cart - Classic Shop" />
      <div style={{ margin: "3rem 0" }}>
        <CartIndex/>
      </div>
    </>
  );
}
