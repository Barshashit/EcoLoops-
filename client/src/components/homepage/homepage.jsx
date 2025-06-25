import React from 'react';
import './components/homepage/homepage.css'; // Update path if needed

const WalmartClone = () => {
  return (
    <div>
      <header className="site-header">
        <div className="header-top">
          <div className="logo">
            <img src="/images/walmart-logo.svg" alt="Walmart Logo" />
          </div>
          <form className="search-form">
            <input type="text" placeholder="Search everything at Walmart and in store" />
            <button type="submit" className="search-btn">
              <img
                src="https://static.vecteezy.com/system/resources/previews/015/337/677/original/transparent-search-icon-free-png.png"
                alt="Search"
              />
            </button>
          </form>
          <nav className="header-nav">
            <a href="#">Reorder</a>
            <a href="#">Sign In</a>
            <a href="#">Reorder</a>
            <a href="#">Cart</a>
          </nav>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <select className="departments-main-nav">
                <option>Departments</option>
              </select>
            </li>
            <li>
              <select className="services-main-nav">
                <option>Services</option>
              </select>
            </li>
            <li>|</li>
            <li><a href="#">Get it fast</a></li>
            <li><a href="#">New arrivals</a></li>
            <li><a href="#">Pharmacy delivery</a></li>
            <li><a href="#">Dinner solution</a></li>
            <li><a href="#">Grocery</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Back to School</a></li>
            <li><a href="#">My Items</a></li>
            <li><a href="#">Auto Service</a></li>
            <li><a href="#">Only at Walmart</a></li>
            <li><a href="#">Registry</a></li>
            <li><a href="#">Walmart+</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src="/images/hero.img.png" alt="Main Hero" />
        </section>

        <section className="promo-grid">
          <img src="/images/img1.png" alt="" />
          <img src="/images/img1.png" alt="" />
          <img src="/images/img1.png" alt="" />
          <img src="/images/img1.png" alt="" />
        </section>

        <section className="category-cards">
          {["Grocery", "Tech", "Beauty", "Fashion", "Home", "Pharmacy"].map((label, i) => (
            <div className="cat" key={i}>
              <img src={`/images/cat-${i + 1}.jpg`} alt={label} />
              <p>{label}</p>
            </div>
          ))}
        </section>

        <section className="product-grid">
          <h2>Popular Picks</h2>
          <div className="grid">
            {[1, 2, 3, 4].map((num) => (
              <div className="prod" key={num}>
                <img src={`/images/prod-${num}.jpg`} alt={`Product ${num}`} />
                <p>Product {num}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
        <p>&copy; 2025 Walmart. For demo use only.</p>
      </footer>
    </div>
  );
};

export default WalmartClone;
