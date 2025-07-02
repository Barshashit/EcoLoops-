import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      {/* Walmart Logo */}
      <div className="header-logo">
        <img src="/images/walmart.png" alt="logo" />
      </div>

      {/* Location Box */}
      <div className="header-location">
        Pickup or delivery? Sacramento, 95829 ▾
      </div>

      {/* Search Bar */}
      <div className="header-search">
        <input
          type="text"
          placeholder="Search everything at Walmart online and in store"
        />
        <span className="search-icon">🔍</span>
      </div>

      {/* Header Right Menu */}
      <div className="header-menu">
        {/* Block 1 */}
        <div className="menu-block">
          <span>Reorder</span>
          <span>My Items</span>
        </div>

        {/* Block 2 (Account Block - navigates to /auth) */}
        <div className="menu-block" onClick={() => navigate("/auth")}>
          <span>Sign In</span>
          <span>Account</span>
        </div>

        {/* Block 3 */}
        <div className="menu-block menu-cart">
          <span>🛒</span>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Header;


