import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import Home from "./modules/Home";
import Blogs from "./modules/Blogs";
import BlogDetails from "./modules/BlogDetails";
import Header from "./components/header/Header";
import ErrorPage from "./components/lib/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.BLOGS} element={<Blogs />} />
        <Route path={ROUTES.BLOGDETAILS} element={<BlogDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
