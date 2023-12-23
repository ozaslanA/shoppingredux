import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";

function NavbarRight() {
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200 relative hover:bg-slate-400">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama yapınız ..."
        />
        <CiSearch size={28} />
      </div>
      <CiHeart size={28} />
      <div className="relative ">
        <div className="absolute top-1 right-5 transform -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          3
        </div>
        <SlBasketLoaded size={28} />
      </div>
    </div>
  );
}

export default NavbarRight;
