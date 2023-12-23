import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/productSlice";
import Product from "./Product";
function Product() {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  console.log(products, "products");
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {productStatus == "LOADİNG" ? (
        <Loading />
      ) : (
        <div>
          {products?.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
