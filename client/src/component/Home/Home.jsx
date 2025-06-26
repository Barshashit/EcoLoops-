// Home.jsx

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Banner Section */}
      <div className="hero-section">
        <div>
          <h2>Save more with<br />Resold at Walmart</h2>
          <button>Shop now</button>
        </div>
        <img
          src="https://i5.walmartimages.com/seo/Craftsman-6-Gallon-Single-Stage-Portable-Electric-Pancake-Air-Compressor-CMV6150_4b2dfd0f-ec9a-4035-8bd0-33db8b2a7b30.529729cfab18e2629c2f65bc09e7a1a7.jpeg"
          alt="Craftsman Compressor"
          style={{ width: '300px', borderRadius: '10px' }}
        />
      </div>

      {/* Cards Section */}
      <div className="card">
        <h4>Last-minute July 4th faves</h4>
        <button>Shop now</button>
      </div>

      <div className="card">
        <h4>Scoop—only at Walmart</h4>
        <button>Shop now</button>
      </div>

      <div className="card">
        <h4>Premium beauty. Victoria’s Secret.</h4>
        <button>Shop now</button>
      </div>

      <div className="card">
        <h4>Oklahoma City Thunder NBA champs gear</h4>
        <button>Shop now</button>
      </div>

      <div className="card">
        <h4>Everything for July 4th</h4>
        <button>Shop now</button>
      </div>

      <div className="card">
        <h4>Up to 55% off</h4>
        <button>Shop now</button>
      </div>

      <div className="card">
        <h4>Summer savings on cleaning & more</h4>
        <button>Shop now</button>
      </div>
    </div>
  );
};

export default Home;
