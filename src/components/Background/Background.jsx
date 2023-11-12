import React, { useEffect, useRef } from "react";
import classes from "./Background.module.scss";
import classNames from "classnames";
import Bubble from "../Bubble/Bubble";
import useStore from "@src/store/store";
import { gsap } from "gsap";

const Background = () => {
  const ref = useRef(null);
  const currentPage = useStore((state) => state.currentPage);

  return (
    <div
      ref={ref}
      className={classNames(
        "bottom-0 right-0 overflow-hidden fixed top-0 left-0 pointer-events-none  ",
        classes.background,
        {
          [classes.horizontal]: currentPage === 2,
          "opacity-100": currentPage > 0,
          "opacity-0": currentPage === 0,
        }
      )}
    >
      {/* Paper Clip */}
      <div className="relative h-full">
        <div className="absolute top-0 right-0  ">
          <div className="w-[200px] h-[300px] transform absolute top-0 right-0">
            <div
              className="bg-[#ffe1aa] w-full h-full"
              style={{
                transform: "translate(154px, -117px) rotate(-45deg)",
              }}
            ></div>
          </div>
          <div className="w-[200px] h-[300px] transform -rotate-45 translate-x-0 translate-y-0 overflow-hidden">
            <div
              className="bg-white w-full h-full relative"
              style={{
                transform: "translate(170px, -70px) rotate(34deg)",
              }}
            ></div>
          </div>
          <img
            src="/assets/neko.webp"
            className="absolute top-0 right-0"
            style={{
              filter: "drop-shadow(2px 4px 6px #eeeeee);",
              transform: "translate(-55px, 78px);",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
