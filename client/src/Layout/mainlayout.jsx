// src/layouts/MainLayout.jsx
import Header from "../component/Header/Header";
import Topmenu from "../component/Topmenu/Topmenu";
import Footer from "../component/Footer/Footer";


const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Topmenu />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
