import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./khalticonfig"

export default function Khalti() {
  let checkout = new KhaltiCheckout(config);

  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px 90px",
    margin:" 10px 20px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
    borderRadius:"10px"
  };



  return (



    <div>
      <button
        onClick={() => checkout.show({ amount: 100 })}
        style={buttonStyles}
      >
        Pay Via Khalti
      </button>
    </div>
  );
}
