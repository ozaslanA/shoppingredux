import React from "react";

function Shorting({ setSort, handleFilterChange, filterTerm }) {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="bg-slate-200 py-3 px-5"
        name=""
        id=""
      >
        <option disabled value="">
          Seçiniz
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
        <option value="incName">İsme Göre Artan</option>
        <option value="decName">İsme Göre Azalan</option>
      </select>
      <input
        type="text"
        placeholder="Ürün Ara"
        value={filterTerm}
        onChange={(e) => handleFilterChange(e.target.value)}
        className="ml-3 p-2"
      ></input>
    </div>
  );
}

export default Shorting;
