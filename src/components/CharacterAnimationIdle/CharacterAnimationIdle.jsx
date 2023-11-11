import React from "react";
import classes from "./CharacterAnimationIdle.module.scss";

const CharacterAnimationIdle = ({ children, delay }) => {
  return (
    <div
      className={classes.transformAnimate}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default CharacterAnimationIdle;
