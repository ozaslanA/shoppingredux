import React, { useState } from "react";
import SliderComp from "../home/SliderComp";
import Shorting from "../home/Shorting";
import Category from "../home/Category";
import Products from "../home/Products";

function Home() {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <SliderComp />
      <Shorting />
      <div className="flex">
        <Category />
        <Products />
      </div>
    </div>
  );
}

export default Home;
