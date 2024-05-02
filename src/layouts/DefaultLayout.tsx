import BottomNavigation from "../components/BottomNavigation";
import Header from "../components/Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const DefaultLayout = ({ children }: any) => {
  return (
    <DefaultLayoutWrapper>
      <Header />
      <div className="flex-1 overflow-y-auto mx-[1.6rem]">
        <Outlet />
      </div>
      <BottomNavigation />
    </DefaultLayoutWrapper>
  );
};

const DefaultLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default DefaultLayout;
