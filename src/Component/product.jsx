import React from "react";
import "./product.css";
import ProductsDetail from "./productsDetail";

function Product({ id, name, imageurl, price, isAvailable, desc }) {
 
  return (
    <div className="container" style={{backgroundColor : isAvailable? 'white': "gray"}}>
      <div className="firstContainer">
        <div>
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
        <div>
          <img src={imageurl} />
        </div>
      </div>
      <ProductsDetail price={price} isAvailable= {isAvailable}/>
    </div>
  );
}

export default Product;
