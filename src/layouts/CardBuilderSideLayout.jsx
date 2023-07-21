import classes from "./cardbuilderLayout.module.css";
import cardSVG from "../assets/cubeBtns/card.svg";
import prismSVG from "../assets/cubeBtns/prism.svg";
import astroSVG from "../assets/cubeBtns/astro.svg";
import choiceSVG from "../assets/cubeBtns/choice.svg";

import Header from "../components/Header/Header";
import ProfileBuilderComponent from "../components/ProfileBuilder/ProfileBuilderComponent";

import { Outlet } from "react-router-dom";

function CubeElement({ img, title }) {
  return (
    <div className={classes.cubeElement}>
      <img className={classes.cubeImg} src={img} alt={title} />
      <p className={classes.cubeTitle}>{title}</p>
    </div>
  );
}

function CardBuilderLayout() {
  return (
    <>
      <Header />
      <ProfileBuilderComponent secondaryBtnText="Publish" />
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.topCubes}>
            <CubeElement img={cardSVG} title="Card" />
            <CubeElement img={prismSVG} title="Prism" />
          </div>
          <div className={classes.bottomCubes}>
            <CubeElement img={astroSVG} title="Astro" />
            <CubeElement img={astroSVG} title="Pride" />
            <CubeElement img={astroSVG} title="University" />
            <CubeElement img={choiceSVG} title="Choice" />
          </div>
        </div>
        <div className={classes.right}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default CardBuilderLayout;
3;
