import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PagesContainers from "./containers/PagesContainers";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import LoginForm from "./pages/LoginForm";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <div>
      <PagesContainers>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <PrivateRoute path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </PagesContainers>
    </div>
  );
}

export default App;
