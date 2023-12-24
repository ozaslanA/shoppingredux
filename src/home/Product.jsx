import React from "react";

function Product({ product }) {
  return (
    <div className="w-[350px] h-[400px] p-2 m-2  border rounded-md relative ">
      <div className="text-2xl font-bold absolute rounded-md top-0 right-0 bg-orange-600 text-white p-2 m-1">
        100 tl
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
        alt=""
      />
      <div className=" text-center px-3 mt-3 text-xl font-bold ">
        {product.title}
      </div>
      <div className=" text-center mt-11">Sepete Ekle</div>
    </div>
  );
}

export default Product;
