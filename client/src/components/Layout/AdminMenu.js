import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="text-center">
      <div className="bg-white shadow-lg rounded-lg p-4 dashboard-menu">
        <h4 className="text-xl font-semibold mb-4">Admin Panel</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <NavLink
              to="/dashboard/admin/create-category"
              className="text-blue-500 hover:text-blue-700"
              activeClassName="text-blue-700"
            >
              Create Category
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/dashboard/admin/create-product"
              className="text-blue-500 hover:text-blue-700"
              activeClassName="text-blue-700"
            >
              Create Product
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/dashboard/admin/products"
              className="text-blue-500 hover:text-blue-700"
              activeClassName="text-blue-700"
            >
              Products
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/dashboard/admin/orders"
              className="text-blue-500 hover:text-blue-700"
              activeClassName="text-blue-700"
            >
              Orders
            </NavLink>
          </li>
          {/* Uncomment the following block if you want to add Users link */}
          {/* <li className="list-group-item">
            <NavLink
              to="/dashboard/admin/users"
              className="text-blue-500 hover:text-blue-700"
              activeClassName="text-blue-700"
            >
              Users
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
