import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Styles from "../components/styles/navbar.module.css";
import styled, { css } from "styled-components";
import PLANETS from "../data.json";
import burgerBar from "../assets/burgerBar.png";
import { getColor } from "./InfoButtons";

const Navbar = () => {
  const [miniBar, setMiniBar] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className={Styles.header}>
      <div>
        <Logo>{logoText}</Logo>
      </div>

      <MobileBarMenu
        pathname={pathname}
        miniBar={miniBar}
        onFocus={() => setMiniBar(true)}
        onBlur={() => setMiniBar(false)}
      >
        {miniBar ? (
          <div className={Styles.closeBtnCircle}>
            <h1 className={Styles.closeBtn} onClick={() => setMiniBar(false)}>
              X
            </h1>
          </div>
        ) : null}
        {PLANETS.map((planet) => {
          return (
            <ColoredDiv
              pathname={pathname}
              name={planet.name}
              key={planet.name}
            >
              <Link className={Styles.link} key={planet.name} to={planet.name}>
                {planet.name}
              </Link>
            </ColoredDiv>
          );
        })}
      </MobileBarMenu>

      <img
        className={Styles.burgerButton}
        src={burgerBar}
        onClick={() => setMiniBar(!miniBar)}
      />
    </header>
  );
};

export default Navbar;

const logoText = "THE PLANETS";
const Logo = styled.span`
  font-family: "Antonio";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;

  color: #ffffff;
`;

interface MobileBarMenuTypes {
  miniBar: boolean;
  pathname: string;
}
const MobileBarMenu = styled.div(
  ({ miniBar, pathname }: MobileBarMenuTypes) => css`
    width: 328px;
    height: 700px;
    border-radius: 25px;
    background-color: rgba(0, 0, 48, 0.74);
    border: 3px solid ${getColor(pathname)};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    position: absolute;
    z-index: 10;
    right: ${miniBar ? "50%" : "-70%"};
    transform: translate(50%);
    top: 20px;
    transition: 0.5s ease;
    @media (min-width: 768px) {
      background: none;
      border: none;
      position: static;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      // justify-content: space-between;
      width: fit-content;
      height: 68px;
      transform: translate(0);
    }
  `
);

const ColoredDiv = styled.div(
  ({ pathname, name }: { pathname: string; name: string }) => css`
    @media (min-width: 1024px) {
      width: fit-content;
      height: 68px;
      display: flex;
      align-items: center;

      border-bottom: ${pathname.includes(name)
        ? "3px solid" + getColor(pathname)
        : ""};
    }
  `
);
