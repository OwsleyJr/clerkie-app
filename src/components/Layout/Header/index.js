import React, { useState } from "react";
import styled from "styled-components";
import NavLinks from "./NavLinks";
import Logo from "../../../assets/grid.png";
import Image from "next/image";
import { useGlobalContext } from "../../../context";

const Header = () => {
  const { secondFullView, screenSwitcher } = useGlobalContext();
  const [show, setShow] = useState(false);

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
          <MobileNav>
            <ImageContainer>
              <RoundedImage src={Logo} alt="Cool Logo" width={40} height={35} />
            </ImageContainer>

            <BurgerContainer show={show} onClick={() => setShow(!show)}>
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
            </BurgerContainer>
            <MobileLinksContainer show={show}>
              <NavLinks />
            </MobileLinksContainer>
            <CloseContainer show={show} onClick={() => setShow(!show)}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CloseContainer>
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  }
`;

const MobileNav = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

const RoundedImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid #ccc;
  padding: 5px;
`;

const LinksContainer = styled.div`
  float: right;
  color: #07b4f2;
  font-weight: bolder;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 25px;
    display: none;
  }
`;

const CloseContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const BurgerContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "none" : "flex")};
    justify-content: end;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

const MobileLinksContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 60px;
  }
`;

const SvgContainer = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
