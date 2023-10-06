import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="container mb-20 py-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 bg-white rounded-lg shadow-md">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="w-full rounded-t-lg"
            />
          </div>
          <div className="col-span-1 bg-gray-600 text-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-center mb-4">
              CONTACT US
            </h1>
            <p className="text-justify">
              For any inquiries or assistance regarding our products or
              services, please feel free to get in touch with us. Our dedicated
              support team is available around the clock to assist you.
            </p>
            
              <p><BiMailSend className="inline" /> : contact@shopwave.com</p>
              <p><BiPhoneCall className="inline" /> : +1 (123) 456-7890</p>
              <p><BiSupport  className="inline"/> : 1-800-123-4567 (Toll-Free)</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
