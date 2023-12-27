import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTocard } from "../../redux/cartSlice";

export const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addTocard({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="flex items-center h-[600px] mt-20">
      <img
        className="w-[500px] h-[500px] object-cover rounded-md shadow-lg"
        src={productDetail?.image}
        alt={productDetail?.title}
      />
      <div className="flex flex-col justify-center pl-40">
        <div className="text-5xl font-bold mb-10">{productDetail?.title}</div>
        <div className="my-2 text-gray-600 mb-10">
          {productDetail?.description}
        </div>
        <div className="my-2 flex items-center text-yellow-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-6 w-6 ${
                star <= productDetail?.rating?.rate
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2c.43 0 .86.17 1.17.48L18 8.31l-1.42 1.42L12 4.84l-4.58 4.58L6 8.31l5.83-5.83c.31-.31.73-.48 1.17-.48zM12 14c-.43 0-.86.17-1.17.48L6 19.69l1.42 1.42 5.08-5.08c.31-.31.73-.48 1.17-.48s.86.17 1.17.48L18 21.69l1.42-1.42-5.08-5.08c-.31-.31-.73-.48-1.17-.48z"
              />
            </svg>
          ))}
          <span className="ml-2">{productDetail?.rating?.rate}</span>
          <span className="text-gray-500 ml-1">
            ({productDetail?.rating?.count} reviews)
          </span>
        </div>
        <div className="text-5xl font-bold text-red-500">
          Price: {productDetail?.price}
          <span className="text-2xl"> TL</span>
        </div>
        <div className="flex items-center gap-5 my-6 ml-14">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-5 text-center text-4xl font-bold"
            type=" text"
            value={quantity}
          />
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>

        <button
          onClick={addBasket}
          className=" w-[250px] h-[50px] bg-gray-500 cursor-pointer text-white px-6 py-2 rounded-md mt-4"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
