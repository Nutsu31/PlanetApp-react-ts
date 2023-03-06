import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PLANETS from "../data.json";
import sourceIcon from "../assets/sourceIcon.png";
import Styles from "./styles/infoText.module.css";
import styled from "styled-components";
import { DesktopButtons, getColor } from "./InfoButtons";

const InfoText = ({
  active,
  setActiveImg,
}: {
  active: number;
  setActiveImg: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { pathname } = useLocation();
  let planet = PLANETS.find((planet) => pathname.includes(planet.name));

  return (
    <div className={Styles.textAndButtonFlex}>
      <div>
        <div className={Styles.nameAndInfoDiv}>
          <PlanetName>{planet?.name}</PlanetName>
          {active === 1 ? (
            <>
              <PlanetInformation>{planet?.overview.content}</PlanetInformation>
              <PlanetSources>
                Source:
                <a className={Styles.sourceLink} href={planet?.overview.source}>
                  Wikipedia
                </a>
                <img src={sourceIcon} />
              </PlanetSources>
            </>
          ) : undefined}

          {active === 2 ? (
            <>
              <PlanetInformation>{planet?.structure.content}</PlanetInformation>
              <PlanetSources>
                Source:
                <a
                  className={Styles.sourceLink}
                  href={planet?.structure.source}
                >
                  Wikipedia
                </a>
                <img src={sourceIcon} />
              </PlanetSources>
            </>
          ) : undefined}

          {active === 3 ? (
            <>
              <PlanetInformation>{planet?.geology.content}</PlanetInformation>
              <PlanetSources>
                Source:
                <a className={Styles.sourceLink} href={planet?.geology.source}>
                  Wikipedia
                </a>
                <img src={sourceIcon} />
              </PlanetSources>
            </>
          ) : undefined}
        </div>
      </div>
      <DesktopButtons setActiveImg={setActiveImg} activeImg={active} />
    </div>
  );
};

export default InfoText;

const PlanetName = styled.h1`
  font-family: "Antonio";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 52px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

const PlanetInformation = styled.p`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* or 200% */

  text-align: left;

  color: #ffffff;
  @media (min-width: 570px) {
    padding: 0 45px 0 0;
  }
  @media (min-width: 1024px) {
    padding: 0;
  }
`;

const PlanetSources = styled.p`
  font-family: "Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap 4px;
`;
