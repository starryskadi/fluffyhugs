import React from "react";
import classes from "./MainCharacter.module.scss";
import classNames from "classnames";

const MainCharacter = ({ characterState }) => {
  // Chracter state should be one of the following properties:
  // laydown walk
  // TODO: Implemnent the checking of the character state

  return (
    <div
      className={classNames(classes.mainCharacter, {
        [classes.laydown]: characterState === "laydown",
        [classes.walk]: characterState === "walk",
      })}
    >
      <div className="absolute top-0 left-0">
        <img src="/assets/human-hair.png" />
      </div>
      <div className="absolute top-0 left-0">
        <img src="/assets/human-neck.png" />
      </div>
      <div className="absolute top-0 left-0">
        <img src="/assets/human-head.png" />
      </div>
      <div className="absolute top-0 left-0">
        <img src="/assets/human-headphone.png" />
      </div>
      <div className="absolute top-0 left-0">
        <img src="/assets/human-neko.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-foot.png" />
      </div>
      <div className="absolute top-0 left-0">
        <img src="/assets/human-foot.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-foot.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-right-foot.png" />
      </div>
      <div className="absolute top-0 left-0">
        <img src="/assets/blouse-left.png" />
      </div>
      <div className="absolute top-0 left-0">
        <img src="/assets/blouse-right.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-right-hand.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-hand.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-body.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-hand-left.png" />
      </div>

      <div className="absolute top-0 left-0">
        <img src="/assets/human-left-hand.png" />
      </div>
    </div>
  );
};

export default MainCharacter;
