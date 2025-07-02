
// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Auth from "./component/Auth/Auth";
import Login from "./component/Auth/login";
import Signup from "./component/Auth/signup";
import MainLayout from "./Layout/mainlayout";
import AuthLayout from "./Layout/authlayout";
import SearchResults from "./component/SearchResults/SearchResults";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages with full layout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
         {/* Search Results page */}
        <Route
          path="/products"
          element={
            <MainLayout>
              <SearchResults />
            </MainLayout>
          }
        />

        {/* Auth pages with minimal layout */}
        <Route
          path="/auth"
          element={
            <AuthLayout>
              <Auth />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


