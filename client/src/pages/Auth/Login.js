import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="ShopWave Login">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded shadow-2xl p-8 w-96">
          <h4 className="text-2xl font-bold mb-4">LOGIN FORM</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                autoFocus
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
              <button
                type="button"
                className="text-blue-500 hover:underline"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
