import React from "react";
import Router from "./Router";
import styled from "styled-components";
import { Theme } from "@radix-ui/themes";
function App() {
  return (
    <Theme>
      <Router />
    </Theme>
  );
}

export default App;
