import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import TopMenu from './component/Topmenu/Topmenu';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
import SearchResults from './component/SearchResults/SearchResults';

const App = () => {
  return (
   <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopMenu />
              <Banner />
            </>
          }
        />
        <Route path="/products" element={<SearchResults />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
