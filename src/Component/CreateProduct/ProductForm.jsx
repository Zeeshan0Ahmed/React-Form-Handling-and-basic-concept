import { useState } from "react";
import styles from "./ProductForm.module.css";

function ProductForm(props) {
  let [pname, setname] = useState("");
  let [pprice, setprice] = useState("");

  let [pdesc, setdesc] = useState("");
  let [pavailable, setavailable] = useState("");
  let [purl, seturl] = useState("");
  function nameinputHandler(e) {
    setname(e.target.value);
  }
  function priceinputHandler(e) {
    setprice(e.target.value);
  }
  function imageinputHandler(e) {
    seturl(e.target.value);
  }
  function availabilityinputHandler(e) {
    setavailable(e.target.value);
  }
  function descriptioninputHandler(e) {
    setdesc(e.target.value);
  }
  function submitHandler(e){
    e.preventDefault();
    let product = {
       
        pname: pname,
        desc: pdesc,
        imageurl: purl,
        isAvailable: Boolean(pavailable),
        price: Number(pprice),
    }
    setname("");
    setdesc("")
    setavailable("")
    setprice("")
    seturl("")
    props.createProductcomp(product)
    props.onCancel();
  }
  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={styles.innerContainer}>
        <div className={styles.divContainer}>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Product Name"
            className={styles.input}
            onChange={nameinputHandler}
            value={pname}
          />
        </div>
        <div className={styles.divContainer}>
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            id="name"
            min="1"
            step="1"
            placeholder="Product Price"
            onChange={priceinputHandler}
            value={pprice}
          />
        </div>
      </div>
      <div className={styles.descContainer}>
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          name=""
          id="description"
          className={styles.input}
          onChange={descriptioninputHandler}
          value={pdesc}
        />
      </div>
      <div className={styles.checkBoxContainer}>
        <input
          type="checkbox"
          name=""
          id="check"
          role="switch"
          onChange={availabilityinputHandler}
          checked={pavailable}
        />
        <label htmlFor="check">Is Product Available in Stock?</label>
      </div>
      <div className={styles.fileContainer}>
        <label htmlFor="selectfile">Select Product Image</label>
        <input type="file" id="selectfile" onChange={imageinputHandler} value={purl} />
      </div>
      <button type="submit" >Add Product</button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
  );
}

export default ProductForm;
