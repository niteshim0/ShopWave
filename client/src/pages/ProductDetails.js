import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              className="w-full h-96 object-cover"
              alt={product.name}
            />
          </div>
          {/* Product Details Card */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6 space-y-4">
              <h1 className="text-2xl font-semibold">Product Details</h1>
              <hr />
              <div className="space-y-2">
                <h6 className="text-lg font-semibold">
                  Name: {product.name}
                </h6>
                <p className="text-sm text-gray-600">
                  Description: {product.description}
                </p>
                <h6 className="text-lg font-semibold">
                  Price:{" "}
                  {product?.price?.toLocaleString("en-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </h6>
                <h6 className="text-lg font-semibold">
                  Category: {product?.category?.name}
                </h6>
                <button
                  className="bg-black text-white px-2 py-1 rounded hover:bg-gray-700"
                  onClick={() => {
                    setCart([...cart, product]);
                    localStorage.setItem(
                      "cart",
                      JSON.stringify([...cart, product])
                    );
                    toast.success("Item Added to Cart");
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
