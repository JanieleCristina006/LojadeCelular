
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Store } from "./pages/Store";
import { Cart } from "./pages/Cart";

export const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};