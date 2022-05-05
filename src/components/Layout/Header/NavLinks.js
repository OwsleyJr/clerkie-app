import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useGlobalContext } from "../../../context";

export const links = [{ name: "Home", to: "/", id: 1 }];

const DesktopNavLinks = () => {
  const { screenSwitcher } = useGlobalContext();

  return (
    <NavLinksWrapper onClick={() => screenSwitcher()} className="nav-links">
      {links.map(({ name, to, id }) => (
        <li key={id}>
          <NavLink href={to} className="link">
            {name}
          </NavLink>
        </li>
      ))}
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  li {
    padding: 5px;
  }
  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: none;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
