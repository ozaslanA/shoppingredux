import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PagesContainers from "./containers/PagesContainers";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import LoginForm from "./pages/LoginForm";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      <PagesContainers>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart /> : <LoginForm />}
          />
        </Routes>
      </PagesContainers>
    </div>
  );
}

export default App;
