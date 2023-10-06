import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center text-3xl font-semibold mb-5">
              All Products List
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products?.map((p) => (
                <div
                  key={p._id}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <Link to={`/dashboard/admin/product/${p.slug}`}>
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="w-full h-auto object-cover"
                      alt={p.name}
                    />
                    <div className="p-4">
                      <h5 className="text-xl font-semibold mb-2">{p.name}</h5>
                      <p className="text-gray-700">{p.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
