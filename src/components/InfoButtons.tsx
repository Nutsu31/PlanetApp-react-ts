import React, { useState } from "react";
import styled, { css } from "styled-components";
import Styles from "./styles/infoButtons.module.css";
import { useLocation } from "react-router-dom";
const buttonsArr = [
  { id: 1, name: "OVERVIEW" },
  { id: 2, name: "STRUCTURE" },
  { id: 3, name: "SURFACE" },
];

interface InfoButtonsTypes {
  setActiveImg: React.Dispatch<React.SetStateAction<number>>;
  activeImg: number;
}
const InfoButtons = ({ setActiveImg, activeImg }: InfoButtonsTypes) => {
  const { pathname } = useLocation();
  return (
    <div className={Styles.buttonsDiv}>
      {buttonsArr.map((btn) => {
        return (
          <>
            <Buttons
              activeImg={activeImg}
              buttonId={btn.id}
              pathname={pathname}
              key={btn.id}
              value={btn.id}
              onClick={() => setActiveImg(btn.id)}
            >
              {btn.name}
            </Buttons>
          </>
        );
      })}
    </div>
  );
};

const DesktopButtons = ({ setActiveImg, activeImg }: InfoButtonsTypes) => {
  const { pathname } = useLocation();
  return (
    <div className={Styles.ButtonsTabletAndDesktop}>
      {buttonsArr.map((button) => {
        return (
          <ButtonsTabletAndDesktop
            activeImg={activeImg}
            buttonId={button.id}
            pathname={pathname}
            key={button.id}
            value={button.id}
            onClick={() => setActiveImg(button.id)}
          >
            {"0" + button.id} {button.name}
          </ButtonsTabletAndDesktop>
        );
      })}
    </div>
  );
};

export { DesktopButtons };

export function getColor(name: string | undefined) {
  switch (name) {
    case "/Mercury":
      return "#419EBB";
    case "/Venus":
      return "#EDA249";
    case "/Earth":
      return "#6D2ED5";
    case "/Mars":
      return "#D14C32";
    case "/Jupiter":
      return "#D83A34";
    case "/Saturn":
      return "#D83A34";
    case "/Uranus":
      return "#1EC1A2";
    case "/Neptune":
      return "#2D68F0";
    default:
      return name;
  }
}

export default InfoButtons;

interface ButtonsType {
  pathname: string;
  buttonId: number;
  activeImg: number;
}

const Buttons = styled.button(
  ({ pathname, buttonId, activeImg }: ButtonsType) => css`
    height: 55px;
    width: 121px;
    font-family: "Spartan";
    font-style: normal;
    font-weight: 700;
    font-size: 9px;
    line-height: 10px;
    /* identical to box height */
    background: transparent;
    border: none;
    ${activeImg === buttonId
      ? `border-bottom: 5px solid ${getColor(pathname)}`
      : null};
    transition: 0.3s ease;
    text-align: center;
    letter-spacing: 1.92857px;
    text-transform: uppercase;

    color: #ffffff;
    @media (min-width: 768px) {
      // display: flex;
    }
  `
);

const ButtonsTabletAndDesktop = styled.button(
  ({ pathname, buttonId, activeImg }: ButtonsType) => css`
    color: white;
    width: 282px;
    height: 48px;
    padding: 0 28px;
    display: none;
    align-items: center;
    border: 1px solid rgb(78, 78, 78);
    gap: 16px;
    background: ${buttonId === activeImg ? getColor(pathname) : "transparent"};

    @media (min-width: 768px) {
      display: flex;
      aling-items: center;
      &:hover {
        background: ${activeImg === buttonId
          ? ""
          : "linear-gradient(66deg, rgba(78,78,78,0.7791491596638656) 100%, rgba(170,166,166,0.4990371148459384) 100%)"};
      }
    }
    @media (min-width: 1024px) {
      width: 350px;
      height: 48px;
    }
  `
);
