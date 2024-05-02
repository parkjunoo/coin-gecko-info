import React from "react";
import { Route, Routes } from "react-router-dom";
import Transactions from "./pages/Transactions/Transactions";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Transactions />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card" element={<Home />} />
        <Route path="/my" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
