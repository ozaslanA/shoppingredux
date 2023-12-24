import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
import Product from "./Product";
import Loading from "../Loading";
function Products() {
  const dispatch = useDispatch();

  const { products, productsStatus } = useSelector((state) => state.products);
  console.log(products, "products");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {productsStatus == "LOADİNG" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {products?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
