import React, { useState } from "react";
import Product from "./product";


function Productlist(props) {
  if(props.newProductList.length === 0) return <h1>NO Products Available</h1>
  return (
    <>
      {props.newProductList.map((prod) => {
      return ( <Product
        key={prod.pId}
          id={prod.pId}
          name={prod.pname}
          desc={prod.desc}
          imageurl={prod.imageurl}
          isAvailable={prod.isAvailable}
          price={prod.price}
        />);
      })}
    </>
  );
}

export default Productlist;
