import { server } from "@/server";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SalesCheckoutPage = ({ totalPrice }) => {
  const [contact, setContact] = useState({ name: "", number: "", venue: "", email: "" });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const saleOrderData = {
      cart: cartItems,
      totalPrice,
      email: contact.email,
      name: contact.name,
      number: contact.number,
      paymentMethod,
      venue: contact.venue,
      status: "Success",
    };

    try {
      await axios.post(`${server}/sales-create-order`, saleOrderData, {
        headers: { "Content-Type": "application/json" },
      });

      swal("Success", "Order placed successfully!", "success").then(() => {
        // Refresh the page after user acknowledges success
         // Clear local storage and reset form
         navigate("/dashboard-allsalesorder")
      localStorage.removeItem("cartItems");
      localStorage.removeItem("saleCartItems");

      setCartItems([]);
      setContact({ name: "", number: "", venue: "", email: "" });
      setPaymentMethod("cash");
        window.location.reload();
      });
     
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order: " + (error.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg border">
      <h1 className="text-xl px-6 font-semibold  mb-4 text-gray-700">Checkout Information</h1>
    

      {/* Contact Information */}
      <div className="space-y-3 px-6">
        {[
          { label: "Full Name", name: "name", type: "text", placeholder: "Enter full name" },
          { label: "Phone Number", name: "number", type: "text", placeholder: "Enter phone number" },
          { label: "Venue", name: "venue", type: "text", placeholder: "Enter delivery venue" },
          { label: "Email", name: "email", type: "email", placeholder: "Enter email address" },
        ].map((field, index) => (
          <div key={index}>
            <label className="text-sm font-medium text-gray-600">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={contact[field.name]}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        ))}
      </div>

      {/* Delivery Method */}
      <div className="mt-4 px-6">
        <h2 className="text-sm font-medium text-gray-700">Delivery Method</h2>
        <div className="flex items-center mt-1">
          <input type="radio" value="Hand Delivered" checked readOnly className="mr-2" />
          <span className="text-sm text-gray-600">Hand Delivered</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="mt-4 px-6">
        <h2 className="text-sm font-medium text-gray-700">Payment Method</h2>
        <div className="mt-2 flex gap-4">
          {["cash", "card", "upi"].map((method) => (
            <label key={method} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={handlePaymentChange}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-600 capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Place Order Button */}
      <div className="flex justify-center">

      <button
        onClick={handleSubmit}
        className="mt-5 px-4 bg-blue-600 text-white py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
        Place Order - ₹{totalPrice}
      </button>
          </div>
    </div>
  );
};

export default SalesCheckoutPage;
