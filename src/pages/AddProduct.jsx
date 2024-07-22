import React, { useState } from "react";
import { useAddProductMutation } from "../redux/api/prApi";
import HeaderNav from "../components/Header/HeaderNav/HeaderNav";

function AddProduct() {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [addProduct, { isLoading }] = useAddProductMutation();

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(inputValue).unwrap();
      setInputValue({ title: "", description: "", price: "", image: "" });
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };
  console.log(inputValue);
  return (
    <div>
      <HeaderNav />
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={inputValue.title}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={inputValue.description}
            onChange={handleInput}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={inputValue.price}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={inputValue.image}
            onChange={handleInput}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
