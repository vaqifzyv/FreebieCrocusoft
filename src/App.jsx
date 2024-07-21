import "./App.css";
import { Main, Product, AddProduct } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
