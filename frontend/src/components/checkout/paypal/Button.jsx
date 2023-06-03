

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PapmentButton() {
  const initialOptions = {
    "client-id": "test",
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };
  const buttonStyle = {
    color: "silver",
    layout: "horizontal",
    height: 48,
    tagline: false,
    shape: "pill",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons style={buttonStyle} />
    </PayPalScriptProvider>
  );
}
