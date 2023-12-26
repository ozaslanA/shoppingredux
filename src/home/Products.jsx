import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../redux/productSlice";
import Product from "./Product";
import Loading from "../Loading";
import ReactPaginate from "react-paginate";

function Products({ category, sort, filterTerm }) {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filterTerm.toLowerCase())
  );
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log("sort", sort);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  const sortOptions = {
    inc: (a, b) => a.price - b.price,
    dec: (a, b) => b.price - a.price,
    incName: (a, b) => a.title.localeCompare(b.title),
    decName: (a, b) => b.title.localeCompare(a.title),
  };
  const selectedSortFunction = sortOptions[sort] || (() => 0);

  return (
    <div>
      {productsStatus == "LOADİNG" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center ">
            {currentItems?.sort(selectedSortFunction)?.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
}

export default Products;
