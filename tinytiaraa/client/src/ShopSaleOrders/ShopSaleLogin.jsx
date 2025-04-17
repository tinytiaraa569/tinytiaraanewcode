import { salesLogin, salesSignup } from "@/redux/actions/salesAuthAction";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ShopSaleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { salesUser, loading, error } = useSelector((state) => state.sales);

  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(salesSignup(form.name, form.email, form.password));
    } else {
      dispatch(salesLogin(form.email, form.password));
    }
  };

  // Redirect if sales user logs in
  if (salesUser) {
    window.location.reload()
  }

  return (

    <div className="w-full h-[85vh] flex justify-center items-center">

    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-[12px] border border-gray-100">
      <h2 className="text-lg font-bold mb-4">{isSignup ? "Sales Signup" : "Sales Login"}</h2>
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border p-2 w-full mb-3"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-3"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded"
          disabled={loading}
        >
          {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p
        className="text-sm mt-3 text-blue-500 cursor-pointer"
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup ? "Already have an account? Login" : "Create an account"}
      </p>
    </div>
    </div>

  );
};

export default ShopSaleLogin;
