import React from "react";
import classes from "./CharacterAnimationIdle.module.scss";

const CharacterAnimationIdle = ({ children }) => {
  return <div className={classes.transformAnimate}>{children}</div>;
};

export default CharacterAnimationIdle;
