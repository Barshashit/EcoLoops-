import React from 'react';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import TopMenu from './component/Topmenu/Topmenu';
import Banner from './component/Banner/Banner';
import Footer from './component/Footer/Footer';
const App = () => {
  return (
    <div>
      
      <Header/>
     <TopMenu/>
     <Banner/>
     <Footer/>
    </div>
  );
};

export default App;
