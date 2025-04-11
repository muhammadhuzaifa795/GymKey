import React, { useState } from "react";
import "./SubscriptionForm.css";


const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="subscription-container para">
      <div className="subscription-form">
        <h2>Subscribe to elevate your fitness</h2>
        <p>Join us today and unlock exclusive fitness perks, personalized plans, and a journey to your best self!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;
