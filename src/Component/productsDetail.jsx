import React, { useState } from "react";
import Button from "./button";
import "./product.css";

export default function ProductsDetail({ price, isAvailable }) {
  let [productsCount, setProductsCount] = useState(0);
  let availableClass = isAvailable ? "available" : "notavailable";
    function productsAvailability(){
      return  productsCount > 0 ? productsCount: 0
    }
  function increment() {
    setProductsCount(++productsCount);
  }
  function decrement() {
    
    setProductsCount(--productsCount);
  }
  return (
    <div className="secondContainer">
      <h4>${price}</h4>
      <div className="insideSecondContainer">
        <Button eventHandler={increment}>+</Button>
        <span>{productsAvailability()}</span>
        <Button eventHandler={decrement} disable={productsCount === 0}>-</Button>
        <span className={availableClass}>
          {isAvailable ? "Available" : "UnAvailable"}
        </span>
      </div>
    </div>
  );
}
