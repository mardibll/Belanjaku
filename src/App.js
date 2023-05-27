import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./view/home/Home";
import About from "./view/about/About";
import Login from "./auth/Login";
import Regist from "./auth/Regist";
import Layanan from "./view/layanan/Layanan";
import Portofolio from "./view/portofolio/Portofolio";
import Kontak from "./view/kontak/Kontak";
import Blog from "./view/blog/Blog";
import DetailProduct from "./view/home/DetailProduct";
import Validasi from "./auth/Validasi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="DetailProduct" element={<DetailProduct />} />
            <Route path="About" element={<About />} />
            <Route path="Layanan" element={<Layanan />} />
            <Route path="Portofolio" element={<Portofolio />} />
            <Route path="Kontak" element={<Kontak />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Login" element={<Login />} />
            <Route path="Regist" element={<Regist />} />
            <Route path="Validasi" element={<Validasi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
