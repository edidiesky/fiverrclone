import React from "react";
import CheckoutIndex from "../components/checkout";
import { Meta } from "../components/common";
import { useSelector } from "react-redux";
import LoaderIndex from "../components/loaders";

export default function Checkout() {
  const { cartIsLoading } = useSelector((store) => store.cart);
  return (
    <div>
      <Meta title={"Secure Checkout"} />
      <div className="w-100">
        {cartIsLoading ? <LoaderIndex /> : <CheckoutIndex />}
      </div>
    </div>
  );
}
