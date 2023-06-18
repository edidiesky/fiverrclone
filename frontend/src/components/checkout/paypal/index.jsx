import { PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  createCustomersOrder,
  updateCustomersOrderToPaid,
} from "../../../Features";

export default function PaymentButton() {
  const amount = "2";
  const navigate = useNavigate();
  const currency = "USD";
  const {
    bag,
    totalPrice,
    shippingPrice,
    estimatedTax,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);
  const [payment, setPayment] = useState("Paypal");
  const { addressData } = useSelector((store) => store.user);
  const { order, successPay } = useSelector((store) => store.order);
  const [paidFor, setPaidFor] = useState(false);

  const orderData = {
    orderItems: bag,
    estimatedTax,

    shippingAddress: addressData,
    TotalShoppingPrice,
    paymentMethod: payment,
    shippingPrice,
  };
  const dispatch = useDispatch();
  const handleApprove = (details) => {
    // console.log(details);
    // Call backend function to fulfill order
    dispatch(updateCustomersOrderToPaid({ details }));
    // Refresh user's account or subscription status
    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  useEffect(() => {
    if (successPay) {
      // Display success message, modal or redirect user to success page
      navigate(`/order-success?orderId=${order?._id}`);
    }
  }, [successPay, navigate]);
  return (
    <PayPalButtons
      style={{
        color: "blue",
        height: 40,
        tagline: false,
        shape: "pill",
        label: "buynow",
      }}
      createOrder={(data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: TotalShoppingPrice,
                },
              },
            ],
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId;
          });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          handleApprove(details);
        });
      }}
    />
  );
}
