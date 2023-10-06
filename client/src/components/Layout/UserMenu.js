import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="text-center">
      <div className="bg-white shadow-lg rounded-lg p-4 dashboard-menu">
        <h4 className="text-xl font-semibold mb-4">Dashboard</h4>
        <div className="bg-blue-100 rounded-lg p-4">
          <ul className="list-group">
            <li className="list-group-item">
              <NavLink
                to="/dashboard/user/profile"
                className="text-blue-500 hover:text-blue-700"
                activeClassName="text-blue-700"
              >
                Profile
              </NavLink>
            </li>
            <li className="list-group-item">
              <NavLink
                to="/dashboard/user/orders"
                className="text-blue-500 hover:text-blue-700"
                activeClassName="text-blue-700"
              >
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
