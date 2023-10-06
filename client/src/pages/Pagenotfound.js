import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"Page not exist-Go Back"}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
        <Link
          to="/"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
