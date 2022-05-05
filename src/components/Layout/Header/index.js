import React from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Logo from "../../../assets/clerkieLogo.jpg";
import Image from "next/image";
import { useGlobalContext } from "../../../context";

const Header = () => {
  const { secondFullView, screenSwitcher } = useGlobalContext();

  return (
    <HeaderNav>
      {secondFullView ? (
        <SvgContainer onClick={() => screenSwitcher()}>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </SvgContainer>
      ) : (
        <>
          <ImageContainer>
            <RoundedImage
              src={Logo}
              alt="Clerkie Logo"
              width={30}
              height={30}
            />
          </ImageContainer>
          <MobileNav>
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </MobileNav>
        </>
      )}

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
  position: relative;
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
`;

const MobileNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: end;
    position: relative;
    width: 50%;
    height: 50%;
    float: right;
  }
`;

// const ImageDiv = styled.div`
// @media (max-width: 768px) {
//   display: flex;
//   justify-content: end;
//   position: relative;
//   width: 50%;
//   height: 50%;
//   float: right;
// }
// `

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;

    position: relative;
    float: left;
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid #ccc;
  padding: 5px;
`;

const LinksContainer = styled.div`
  float: right;
  @media (max-width: 768px) {
    display: none;
  }
`;

const SvgContainer = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
