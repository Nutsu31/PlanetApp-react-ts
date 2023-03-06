import React from "react";
import { useParams } from "react-router-dom";
import PLANETS from "../data.json";
import Styles from ".//styles/planet.module.css";

const Planets = ({ activeImg }: { activeImg: number | undefined | null }) => {
  const { name } = useParams();
  const planets = PLANETS.find((planet) => planet.name === name);

  const img_planet = planets?.images.planet;
  const img_internal = planets?.images.internal;
  const img_surface = planets?.images.geology;
  return (
    <div className={Styles.planetImgDiv}>
      {activeImg === 1 && (
        <img className={Styles.imgSizeControll} src={img_planet} />
      )}
      {activeImg === 2 && (
        <img className={Styles.imgSizeControll} src={img_internal} />
      )}
      {activeImg === 3 && (
        <>
          <img className={Styles.imgSizeControll} src={img_planet} />
          <img className={Styles.surfaceImg} src={img_surface} />
        </>
      )}
    </div>
  );
};

export default Planets;
