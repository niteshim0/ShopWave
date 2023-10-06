import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  const privacyPolicyText = `
    Privacy Policy - ShopWave

    Thank you for choosing ShopWave. Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our Ecommerce platform.

    1. Information We Collect

    We collect the following types of information when you use ShopWave:

    - Personal Information: When you create an account or make a purchase, we may collect your name, email address, shipping address, and payment information.

    - Usage Information: We collect information about your interactions with our platform, including pages visited, products viewed, and your IP address.

  `;

  return (
    <Layout title={"Privacy Policy - ShopWave"}>
      <div className="flex h-screen p-10">
        {/* Card for Image */}
        <div className="w-1/2 mr-10">
          <div className="bg-white rounded-lg">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
        </div>

        {/* Card for Policy Text */}
        <div className="w-1/2 bg-white rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <div className="text-justify mt-2 whitespace-pre-line">
            {privacyPolicyText}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
