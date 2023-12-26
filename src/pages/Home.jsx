import React, { useState } from "react";
import SliderComp from "../home/SliderComp";
import Shorting from "../home/Shorting";
import Category from "../home/Category";
import Products from "../home/Products";

function Home() {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const handleFilterChange = (value) => {
    setFilterTerm(value);
  };

  return (
    <div>
      <SliderComp />
      <Shorting
        setSort={setSort}
        handleFilterChange={handleFilterChange}
        filterTerm={filterTerm}
      />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} filterTerm={filterTerm} />
      </div>
    </div>
  );
}

export default Home;
