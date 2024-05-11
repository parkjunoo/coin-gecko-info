import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { Theme } from "@radix-ui/themes";
import { Container } from "./MainLayout.style";
import * as Tabs from "@radix-ui/react-tabs";
import "@radix-ui/themes/styles.css";
import { getAllCoinList } from "../core/api";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({}: MainLayoutProps) => {
  // const [allList, setAllList] = useState([]);
  // useEffect(() => {
  //   getAllCoinList();
  // }, []);

  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default React.memo(MainLayout);
