import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="container mx-auto mt-3 p-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1">
            <UserMenu />
          </div>
          <div className="col-span-3">
            <h1 className="text-2xl text-center mb-6">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div key={i} className="bg-white shadow-lg rounded-lg mb-6">
                  <table className="table-auto w-full">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Buyer</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Payment</th>
                        <th className="px-4 py-2">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">{i + 1}</td>
                        <td className="px-4 py-2">{o?.status}</td>
                        <td className="px-4 py-2">{o?.buyer?.name}</td>
                        <td className="px-4 py-2">{moment(o?.createdAt).fromNow()}</td>
                        <td className="px-4 py-2">{o?.payment.success ? "Success" : "Failed"}</td>
                        <td className="px-4 py-2">{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {o?.products?.map((p, i) => (
                      <div key={i} className="bg-white shadow-lg rounded-lg p-3 flex flex-row">
                        <div className="col-span-1">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="w-24 h-24 object-cover rounded"
                            alt={p.name}
                          />
                        </div>
                        <div className="col-span-3">
                          <p className="text-xl font-semibold">{p.name}</p>
                          <p className="text-sm">{p.description.substring(0, 30)}</p>
                          <p className="text-lg">Price: {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
