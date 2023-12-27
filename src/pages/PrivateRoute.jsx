import React from "react";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({ component: Comp, ...rest }) => {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      element={
        localStorage.getItem("s11Login") ? (
          <Comp />
        ) : (
          // navigate fonksiyonunu kullanarak yönlendirme yap
          () => navigate("/login")
        )
      }
    />
  );
};

export default PrivateRoute;
