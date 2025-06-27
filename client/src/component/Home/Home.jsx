// Home.jsx

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* LEFT COLUMN */}
      <div className="left-column">
        <div className="card">
          <img src="/images/img1.png" alt="Item 1" />
          <p>Shop now</p>
        </div>
        <div className="card">
          <img src="/images/img2.png" alt="Item 2" />
          <p>Shop now</p>
        </div>
        <div className="card">
          <img src="/images/img3.png" alt="Item 3" />
          <p>Shop now</p>
        </div>
      </div>

      {/* CENTER COLUMN */}
      <div className="center-column">
        <img src="/images/img4.png" alt="Big Banner" />
      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <div className="card">
          <img src="/images/img5.png" alt="Item 4" />
          <p>Shop now</p>
        </div>
        <div className="card">
          <img src="/images/img6.png" alt="Item 5" />
          <p>Shop now</p>
        </div>
        <div className="card">
          <img src="/images/img7.png" alt="Item 6" />
          <p>Shop now</p>
        </div>
      </div>

    </div>
  );
};

export default Home;



