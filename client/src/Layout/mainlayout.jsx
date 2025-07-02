// src/layouts/MainLayout.jsx
import Header from "../component/Header/Header";
import Topmenu from "../component/Topmenu/Topmenu";
import Banner from "../component/Banner/Banner";
import Footer from "../component/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Topmenu />
      {children}
      <Banner />
      <Footer />
    </>
  );
};

export default MainLayout;
