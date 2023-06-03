import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomersOrder } from "../../../Features";

export default function PaymentButton() {
  const amount = "2";
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
  const handleApprove = (orderId) => {
    console.log(orderId);
    // Call backend function to fulfill order
    dispatch(createCustomersOrder(orderData));
    // Refresh user's account or subscription status
    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  if (successPay) {
    // Display success message, modal or redirect user to success page
    alert("Thank you for your purchase!");
  }

  return (
    <PayPalButtons
      style={{
        color: "blue",
        layout: "horizontal",
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
                  value: 100,
                },
              },
            ],
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId;
          });
      }}
      onApprove={async function(data, actions) {
        await actions.order.capture();
        handleApprove(data);
      }}
    />
  );
}
