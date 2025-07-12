import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log("🏠 Home page rendered");
  }, []);
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to Ecoloops</h1>
      <p>Search for notebooks, electronics, and bags to see eco-friendly options.</p>
    </div>
  );
};

export default Home;
