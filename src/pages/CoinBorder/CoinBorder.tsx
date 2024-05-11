import React from "react";
import styled from "styled-components";
import { Theme } from "@radix-ui/themes";
import CoinBorderStyle from "./CoinBorder.style";

interface CoinBorderProps {
  children: React.ReactNode;
}

const CoinBorder: React.FC<CoinBorderProps> = () => {
  return <CoinBorderStyle></CoinBorderStyle>;
};

export default React.memo(CoinBorder);
