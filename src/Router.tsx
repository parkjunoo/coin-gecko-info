import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import CoinBorder from './pages/CoinBorder/CoinBorder';
import CoinDetail from './pages/CoinDetail/CoinDetail';
import Home from './pages/Home/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/list" index element={<CoinBorder />} />
        <Route path="/favorite" index element={<Home />} />
      </Route>
      <Route path="/detail/:coinCd" element={<CoinDetail />} />
    </Routes>
  );
};

export default Router;
