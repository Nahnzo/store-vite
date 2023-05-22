import React from "react";

import "../src/App.css";

import MainPage from "./components/MainPage/MainPage";
import Favorites from "./components/Favorites/Favorites";
import Cart from "./components/Cart/Cart";

import { Route, Routes } from "react-router-dom";
function createPath(path) {
  const { VITE_BASE_URL } = import.meta.env;
  return `${VITE_BASE_URL}${path}`;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/store-vite/" element={<MainPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
