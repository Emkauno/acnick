import React from "react";
import { Holder, MainHolder } from "./styles/MainContainer";

const MainContainer = ({ children }) => {
  return (
    <MainHolder>
      <Holder>{children}</Holder>
    </MainHolder>
  );
};

export default MainContainer;
