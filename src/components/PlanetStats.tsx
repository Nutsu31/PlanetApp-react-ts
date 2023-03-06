import React from "react";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import PLANETS from "../data.json";
import Styles from "../components/styles/planetstats.module.css";

const PlanetStats = () => {
  const { pathname } = useLocation();
  const planet = PLANETS.find((planet) => pathname.includes(planet.name));

  const rotation = "ROTATION TIME";
  const revolution = "REVOLUTION TIME";
  const radius = "RADIUS";
  const avarageTemp = "AVERAGE TEMP.";

  return (
    <div className={Styles.planetStatDiv}>
      <StatsDiv>
        <StatsName>{rotation}</StatsName>
        <Stats>{planet?.rotation}</Stats>
      </StatsDiv>
      <StatsDiv>
        <StatsName>{revolution}</StatsName>
        <Stats>{planet?.revolution}</Stats>
      </StatsDiv>
      <StatsDiv>
        <StatsName>{radius}</StatsName>
        <Stats>{planet?.radius}</Stats>
      </StatsDiv>
      <StatsDiv>
        <StatsName>{avarageTemp}</StatsName>
        <Stats>{planet?.temperature}</Stats>
      </StatsDiv>
    </div>
  );
};

export default PlanetStats;

const StatsDiv = styled.div(
  () => css`
    width: 100%;
    height: 48px;
    padding: 0 24px;
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid rgb(78, 78, 78);
    @media (min-width: 768px) {
      width: 228px;
      height: 88px;
      padding: 16px 0 0 8px;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;
      flex-direction: column;
    }
  `
);

const StatsName = styled.span`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.727273px;
  text-transform: uppercase;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Stats = styled.span`
  font-family: "Antonio";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height */

  text-align: right;
  letter-spacing: -0.75px;
  text-transform: uppercase;

  color: #ffffff;
`;
