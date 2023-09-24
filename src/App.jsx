import React, { useState } from "react";
import "./App.css";
import CreateProduct from "./Component/CreateProduct/CreateProduct";

import ProductList from './Component/Productlist'
import Filterproduct from "./Component/filterProduct/filterproduct";

const products = [
  {
    pId: 1,
    pname: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur.",
    imageurl: "images/download.jpg",
    isAvailable: true,
    price: 12,
  },
  {
    pId: 2,
    pname: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur.",
    imageurl: "public/images/hay.jpg",
    isAvailable: false,
    price: 19,
  },
  {
    pId: 3,
    pname: "Bracolli",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur.",
    imageurl: "images/images.jpg",
    isAvailable: true,
    price: 15,
  },
  {
    pId: 4,
    pname: "Oranges",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur.",
    imageurl: "images/oranges.jpg",
    isAvailable: true,
    price: 21,
  },
  {
    pId: 5,
    pname: "Cheese Cake",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur.",
    imageurl: "images/cake.jpg",
    isAvailable: false,
    price: 24,
  },
];
function App() {
  let[newProductList, setNewProductList] = useState(products)
  let[filterTextValue, setFilterTextValue] = useState("all")
  let filterProductList = newProductList.filter((element)=>{
     if(filterTextValue === 'available'){
      return element.isAvailable === true
     }else if(filterTextValue === 'unavailable'){
      return element.isAvailable === false
     }else{
      return element;
     }
  })
  function createProductcomp1(product){
    product.pId = newProductList.length +1
    setNewProductList([product, ...newProductList])
  }
  function filterValue(fvalue){
     setFilterTextValue(fvalue)
  }
  return (
    <>
    <CreateProduct createProductcomp1={createProductcomp1}/>
    <Filterproduct filterValue = {filterValue}/>
     <ProductList newProductList={filterProductList}/>
    </>
  );
}

export default App;
