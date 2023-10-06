import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";

const Search = () => {
  const [values, setValues] = useSearch();
 const navigate = useNavigate();
 const [cart, setCart] = useCart();
  return (
    <Layout title={"Search results"}>
      <div className="container mx-auto h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mt-8">Search Results</h1>
          <h6 className="mt-2">
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="w-1/3 p-2" key={p._id}>
              <Link to={`/product/${p.slug}`} className="hover:no-underline">
              <div className="border w-full h-full rounded shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105 b hover:border-blue-500 cursor-pointer object-cover">
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
            <button className="bg-black text-white px-2 py-1 rounded hover:bg-gray-700"
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
      </div>
    </Layout>
  );
};

export default Search;
