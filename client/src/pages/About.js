import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="flex h-screen p-10">
        {/* Card for Image */}
        <div className="w-1/2 mr-10">
          <div className="bg-white rounded-lg">
            <img
              src="/images/about.jpeg"
              alt="contactus"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        </div>

        {/* Card for Details */}
        <div className="w-1/2 bg-white rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-justify mt-2">
            Welcome to ShopWave! We are an online retail store
            committed to providing a wide variety of products to our customers. Our mission is to offer you
            quality products at competitive prices, making your shopping
            experience convenient and enjoyable.
          </p>
          <p className="text-justify mt-2">
            Whether you're looking for electronics, fashion, home goods, or
            anything in between, our extensive catalog has something for
            everyone. Our user-friendly website allows you to browse through
            countless items, read reviews, and make informed purchase decisions
            from the comfort of your home.
          </p>
          <p className="text-justify mt-2">
            Thank you for choosing us as your trusted online shopping
            destination. We are dedicated to delivering the best shopping
            experience possible, and we look forward to serving you for years
            to come.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
