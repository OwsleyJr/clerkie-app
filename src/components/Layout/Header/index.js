import React, { useState } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import NavLinks from "./NavLinks";
import Logo from "../../../assets/clerkieLogo.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderNav>
      <RoundedImage src={Logo} alt="Clerkie Logo" width={30} height={30} />

      <NavLinks />
    </HeaderNav>
  );
};

export default Header;

const HeaderNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms linear;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }
  .logo {
    flex: 2;
    color: var(--text);
    font-size: 32px;
  }
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid #ccc;
  padding: 5px;
`;
