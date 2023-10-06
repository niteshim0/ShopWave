import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";

const AdminDashboard = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container mx-auto p-6 dashboard">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4">
            <AdminMenu />
          </div>
          <div className="w-full md:w-3/4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">
                Admin Information
              </h3>
              <div className="mb-4">
                <span className="font-semibold">Admin Name:</span>{" "}
                {auth?.user?.name}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Admin Email:</span>{" "}
                {auth?.user?.email}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Admin Contact:</span>{" "}
                {auth?.user?.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
