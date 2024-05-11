import React, { Children } from "react";
import styled from "styled-components";
import { Theme } from "@radix-ui/themes";
import MainLayoutStyle from "./MainLayout.style";
import * as Tabs from "@radix-ui/react-tabs";
import "@radix-ui/themes/styles.css";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <MainLayoutStyle.Container>
      <Theme>
        <Tabs.Root defaultValue="tab1" orientation="vertical">
          <Tabs.List aria-label="tabs example">
            <Tabs.Trigger value="tab1">One</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Two</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Three</Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
        {children}
      </Theme>
    </MainLayoutStyle.Container>
  );
};

export default React.memo(MainLayout);
