import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import './App.css';
import AddProductForm from "./Components/AddProductForm";
import Category from "./Components/Category";
import HomePage from "./Components/HomePage";
import LoginPage from './Components/LoginPage';
import ProductList from "./Components/ProductList";
import Sidebar from "./Components/Sidebar";
import SubCategory from "./Components/SubCategory";
import UpdateProductForm from "./Components/UpdateProductForm";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Sidebar />}
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/subCategory" element={<SubCategory />} />
        <Route exact path="/addnew" element={<AddProductForm />} />
        <Route exact path="/product" element={<ProductList />} />
        <Route path="/update" element={<UpdateProductForm />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
