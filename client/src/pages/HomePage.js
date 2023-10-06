import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload} from "react-icons/ai"; // Import cart icon
import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Filter by category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length && !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <Layout title={"All Products -- BEST OFFERS"}>
<div className="container mx-auto mt-3 p-3 flex">
  <div className="w-1/4">
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4">
      <h4 className="text-center">Filter By Category</h4>
      <div className="space-y-2">
        {categories?.map((c) => (
          <label key={c._id} className="flex items-center">
            <Checkbox
              onChange={(e) => handleFilter(e.target.checked, c._id)}
            />
            <span className="ml-2">{c.name}</span>
          </label>
        ))}
      </div>
    </div>
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 mt-4">
    <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id} className="flex items-center">
                  <Radio value={p.array}><span className="ml-2">
                  {p.name}</span></Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
      <div className="mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => window.location.reload()}
        >
          RESET FILTERS
        </button>
      </div>
    </div>
  </div>

        <div className="w-3/4">
  <h1 className="text-center text-2xl font-semibold mb-4">All Products</h1>
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
          <div className="mt-4 p-3">
            {products && products.length < total && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Load More"} <AiOutlineReload />
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
