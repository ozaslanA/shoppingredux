import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocard } from "../redux/cartSlice";

function Product({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const addBasket = () => {
    console.log("quantity:", quantity);

    dispatch(
      addTocard({
        id: product?.id,
        title: product?.title,
        image: product?.image,
        price: product?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="w-[400px] h-[400px] p-2 m-2 pt-5  border rounded-md relative ">
      <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-orange-600 text-white p-2 m-1">
        {product.price}
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <div className=" text-center px-3 mt-3 text-xl font-bold ">
        {product.title}
      </div>
      <div
        onClick={() => {
          setQuantity(quantity + 1);
          addBasket();
        }}
        className=" text-center mt-11"
      >
        Sepete Ekle
      </div>
      <div
        className=" text-center "
        onClick={() => navigate(`products/${product?.id}`)}
      >
        İncele
      </div>
    </div>
  );
}

export default Product;
