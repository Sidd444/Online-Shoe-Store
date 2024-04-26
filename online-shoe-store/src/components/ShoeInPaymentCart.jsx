import React, { useRef } from "react";

export default function ShoeInPaymentCart(props) {

  return (
    <div
      id="cartShoe"
      style={{ display: "flex", justifyContent: "space-evenly", marginLeft:"50px" }}
    >
      <img src={props.shoe.imgSrc} />
      <div
       style={{ display: "flex", justifyContent: "space-evenly" }}
      >
      <div
       style={{marginLeft:"20px",width:"250px"}}
      >
        <h3 style={{ marginTop: "-8px" }}>{props.shoe.name}</h3>
        <h4 style={{ marginTop: "-10px" }}>${props.shoe.price}</h4>
      </div>
      <h4 style={{ marginTop: "-8px",marginLeft:"15px" }}>quantity: {props.shoe.q}</h4></div>
    </div>
  );
}
