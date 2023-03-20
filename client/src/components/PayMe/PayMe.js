import React, { useState } from "react";
import "./PayMe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PayMe() {
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      toast.warn("please enter amount");
    } else {
      var options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        key_secret: process.env.REACT_APP_RAZORPAY_SECRET,
        amount: amount * 100,
        currency: "USD",
        name: "DSA101",
        description: "Buy Me A Coffee ☕️",
        handler: function (response) {
          toast.success("Thanks for the Coffee ☺️");
        },
        notes: {
          address: "BH-6, LPU, Phagwara, Punjab - 144411",
        },
        theme: {
          color: "#7282fe",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <>
      <div className="payme-container">
        <h1 className="heading">
          If you found my project helpful, please consider buying me a coffee!
          ☕️
        </h1>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="amount">
              Amount (
              <span style={{ color: "#7282fe", fontWeight: "bold" }}>$</span>) :
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              min="1"
              step="1"
            />
          </div>
          <button className="btn-primary payment-btn">
            Proceed{" "}
            <div>
              <img src="/assets/icons/arrow-right-white.svg" alt="" />
            </div>
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
