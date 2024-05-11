import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <div>
        <Link
          to="/list"
          className={[
            location.pathname === "/list" ? "active" : "",
            "coin-gnb-tabs",
          ].join(" ")}
        >
          Home
        </Link>
        <Link
          to="/favorite"
          className={[
            location.pathname === "/favorite" ? "active" : "",
            "coin-gnb-tabs",
          ].join(" ")}
        >
          About
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .coin-gnb-tabs {
    height: 5rem;
    border: 1px solid black;
    padding: 0 2rem;
  }

  .active {
    background-color: #f5f5f5;
  }
`;
export default Header;
