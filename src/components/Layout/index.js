import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Nav>
        <Header />
      </Nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
