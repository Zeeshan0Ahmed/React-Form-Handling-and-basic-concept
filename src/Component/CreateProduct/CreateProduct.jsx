import React, { useState } from "react";
import ProductForm from "./ProductForm";

function CreateProduct(props) {
  const [showForm, setShowForm] = useState(false);
  function createProductcomp(product) {
    props.createProductcomp1(product);
  }
  function onCreateNewProduct() {
    setShowForm(true);
  }
  function onproductsubmitorcancelling() {
    setShowForm(false);
  }
  return (
    <div>
      {!showForm && <button onClick={onCreateNewProduct}>Create Form</button>}
      {showForm && (
        <ProductForm
          createProductcomp={createProductcomp}
          onCancel={onproductsubmitorcancelling}
        />
      )}
    </div>
  );
}

export default CreateProduct;
