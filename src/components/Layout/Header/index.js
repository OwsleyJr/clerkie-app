import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Logo from "../../../assets/clerkieLogo.jpg";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderNav>
      <RoundedImage src={Logo} alt="Clerkie Logo" width={30} height={30} />
      <LinksContainer>
        <NavLinks />
      </LinksContainer>
    </HeaderNav>
  );
};

export default Header;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid #ccc;
  padding: 5px;
`;

const LinksContainer = styled.div`
  float: right;
`;
