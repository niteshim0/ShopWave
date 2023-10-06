import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"ShopWave-Dashboard"}>
      <div className="container mx-auto mt-3 p-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <UserMenu />
          </div>
          <div className="col-span-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold">{auth?.user?.name}</h3>
              <p className="text-lg">{auth?.user?.email}</p>
              <p className="text-lg">{auth?.user?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
