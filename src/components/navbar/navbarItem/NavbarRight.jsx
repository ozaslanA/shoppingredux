// NavbarRight.js
import React, { useEffect, useState } from "react";
import { CiSearch, CiHeart, CiLogin, CiLogout } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/authSlice";
import { toast } from "react-toastify";
function NavbarRight() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount, carts, totalAmount } = useSelector((state) => state.carts);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  const handleCartMouseEnter = () => {
    setIsCartDropdownOpen(true);
  };

  const handleCartMouseLeave = () => {
    setIsCartDropdownOpen(false);
  };

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const handleLoginClick = () => {
    navigate("login");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate("/");
    toast.success("başarıyla çıkış yapıldı");
  };
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
      <div
        className="relative"
        onMouseEnter={handleCartMouseEnter}
        onMouseLeave={handleCartMouseLeave}
      >
        <div onClick={() => navigate("cart")} className="relative">
          <div className=" dropdown-containerabsolute top-1 right-5 transform -translate-y-1/2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </div>
          <SlBasketLoaded size={28} />
        </div>
        {isCartDropdownOpen && (
          <div className="w-[250px] h-[300px] dropdown-container absolute top-full  mt-2 p-2 bg-gray-300 border rounded shadow-md z-10">
            <p>Toplam Ürün Sayısı: {itemCount}</p>
            <p>Toplam Tutar: {totalAmount.toFixed(2)} ₺</p>
            <ul>
              {carts.map((item) => (
                <li key={item.id}>
                  {item.name} - Miktar: {item.quantity} - Fiyat:
                  {item.totalPrice} ₺
                </li>
              ))}
            </ul>
            <button onClick={() => navigate("cart")} className="relative">
              Sepete Git
            </button>
          </div>
        )}
      </div>
      {isAuthenticated ? (
        <div onClick={handleLogoutClick} className="relative">
          Çıkış Yap
          <CiLogout size={28} />
        </div>
      ) : (
        <div onClick={handleLoginClick} className="relative">
          Giriş Yap
          <CiLogin size={28} />
        </div>
      )}
    </div>
  );
}

export default NavbarRight;
