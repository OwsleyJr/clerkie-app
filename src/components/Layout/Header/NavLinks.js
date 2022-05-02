import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Contact", to: "/contact", id: 3 },
];

const DesktopNavLinks = () => {
  return (
    <NavLinksWrapper className="nav-links">
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
    flex-direction: column;
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
