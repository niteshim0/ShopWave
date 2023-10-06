import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useCart();

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto mt-3">
        <h4 className="text-center text-xl font-semibold">
          Category - {category?.name}
        </h4>
        <h6 className="text-center">{products?.length} results found</h6>
        <div className="flex flex-wrap">
          {products?.map((p) => (
            <div className="w-1/3 p-2" key={p._id}>
              <Link to={`/product/${p.slug}`} className="hover:no-underline">
                <div className="border w-full h-full rounded shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 b hover:border-blue-500 cursor-pointer">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="w-full h-40 object-cover mb-2 rounded"
                    alt={p.name}
                  />
                  <h5 className="text-lg font-semibold">{p.name}</h5>
                  <h5 className="text-lg font-semibold card-price">
                    {p.price.toLocaleString("en-IN", {
                      style: "currency",
                      currency: "INR",
                    })}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="mt-2 space-x-2">
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="bg-black text-white px-2 py-1 rounded hover:bg-gray-700"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to Cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
