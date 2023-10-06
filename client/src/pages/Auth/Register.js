import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register to ShopWave">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded shadow-lg p-8 w-96">
          <h4 className="text-2xl font-bold mb-4">REGISTER FORM</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full"
                placeholder="Enter Your Name"
                required
                autoFocus
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 w-full"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border p-2 w-full"
                placeholder="Enter Your Address"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="border p-2 w-full"
                placeholder="What is Your Favorite Sports"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
