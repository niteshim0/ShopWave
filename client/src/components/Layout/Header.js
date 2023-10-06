import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect,useState } from "react";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  const [isSticky, setIsSticky] = useState(false);

  // Add a scroll event listener to track scrolling and update the sticky state.
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

  return (
    <header
    className={`${
      isSticky ? "fixed top-0 left-0 right-0 z-50 bg-gray-200 shadow-lg transition duration-300 ease-in-out": "bg-gray-200"
    }`}
  >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
            <img
              src="/images/shopwave-logo.png"
              alt="Shopwave Logo"
              className="h-11 w-15 ml-4"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <SearchInput />
            <NavLink
              to="/"
              className="text-blue hover:text-blue-600 px-4 py-2 rounded"
            >
              Home
            </NavLink>
            <div className="relative group">
              <Link
                to="/categories"
                className="text-blue hover:text-blue-600 px-4 py-2 rounded"
              >
                Categories
              </Link>
              <ul className="absolute left-0 mt-2 space-y-2 bg-white text-black hidden group-hover:block">
                <li>
                  <Link to="/categories" className="block py-2 px-4">
                    All Categories
                  </Link>
                </li>
                {categories?.map((c) => (
                  <li key={c._id}>
                    <Link
                      to={`/category/${c.slug}`}
                      className="block py-2 px-4"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {!auth?.user ? (
              <>
                <NavLink
                  to="/register"
                  className="text-blue hover:text-blue-600 px-4 py-2 rounded"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="text-blue hover:text-blue-600 px-4 py-2 rounded"
                >
                  Login
                </NavLink>
              </>
            ) : (
              <div className="relative group">
                <NavLink
                  to="#"
                  className="text-blue hover:text-blue-600 px-4 py-2 rounded"
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="absolute left-0 mt-2 space-y-2 bg-white text-black hidden group-hover:block">
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="block py-2 px-4"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="block py-2 px-4"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
            <NavLink
              to="/cart"
              className="text-blue hover:text-blue-600 px-4 py-2 rounded"
            >
               <Badge count={cart?.length} showZero offset={[10, -5]}>
                <FiShoppingCart size={20} />
              </Badge>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
