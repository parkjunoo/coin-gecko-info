import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/my" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
