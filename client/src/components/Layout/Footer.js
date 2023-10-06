import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-lg font-semibold">&copy; ShopWave</h1>
        <p className="mt-3">
          <Link to="/about" className="text-blue-400 hover:text-blue-600 mx-2">
            About
          </Link>
          |
          <Link to="/contact" className="text-blue-400 hover:text-blue-600 mx-2">
            Contact
          </Link>
          |
          <Link to="/policy" className="text-blue-400 hover:text-blue-600 mx-2">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
