import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const loginData = {
      email: email,
      password: password,
    };

    axios({
      method: "post",
      url: "https://reqres.in/api/register",
      data: loginData,
    }).then((response) => {
      if (response.status === 200) {
        localStorage.setItem("s11login", response.data.token);
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <label className="mb-2">
          E-Mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-4 mt-2 border rounded-md"
          />
        </label>
        <label className="mb-2">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-4 mt-2 border rounded-md"
          />
        </label>
        <button
          type="submit" // formu submit etmek için
          className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
