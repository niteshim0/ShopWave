import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div key={c._id} className="bg-white rounded-lg shadow-md">
              <Link
                to={`/category/${c.slug}`}
                className="block px-4 py-6 text-center font-semibold text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition duration-300"
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
