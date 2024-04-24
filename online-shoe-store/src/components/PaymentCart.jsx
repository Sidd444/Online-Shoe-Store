import React from "react";
import { Link } from "react-router-dom";
import ShoeInPaymentCart from "./ShoeInPaymentCart";
import useShoes from "../contexts/CartContext";

export default function PaymentCart(props) {
  const{arr,total}=useShoes();

  return (
    <div id="cart">
      <h1>Cart</h1>
      <div>
        {arr.map((shoe) => (
          <ShoeInPaymentCart
            shoe={shoe}
          />
        ))}
      </div>
      <h2>Total:{total}</h2>
      <Link to='/' className="flex-center">
        <button id="back-to-shopping">
          Go Back To Shopping
        </button>
      </Link>
    </div>
  );
}
