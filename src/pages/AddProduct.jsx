import React, { useState } from "react";
import { useAddProductMutation } from "../redux/api/prApi";
import HeaderNav from "../components/Header/HeaderNav/HeaderNav";

function AddProduct() {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  const [addProduct, { isLoading }] = useAddProductMutation();

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(inputValue).unwrap();
      setInputValue({
        title: "",
        description: "",
        price: "",
        image: "",
        category: "",
      });
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  return (
    <div>
      <HeaderNav />
      <div style={styles.container}>
        <h1 style={styles.header}>Add Product</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title:</label>
            <input
              type="text"
              name="title"
              value={inputValue.title}
              onChange={handleInput}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description:</label>
            <textarea
              name="description"
              value={inputValue.description}
              onChange={handleInput}
              required
              style={styles.textarea}
            ></textarea>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Price:</label>
            <input
              type="number"
              name="price"
              value={inputValue.price}
              onChange={handleInput}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Image URL:</label>
            <input
              type="text"
              name="image"
              value={inputValue.image}
              onChange={handleInput}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category:</label>
            <input
              type="text"
              name="category"
              value={inputValue.category}
              onChange={handleInput}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" disabled={isLoading} style={styles.button}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "50px auto",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "center",
  },
};

export default AddProduct;
