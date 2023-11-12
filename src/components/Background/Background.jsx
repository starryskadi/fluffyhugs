import React, { useRef } from "react";
import classes from "./Background.module.scss";
import classNames from "classnames";
import useStore from "@src/store/store";

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
        <div
          className={classNames("absolute top-0 right-0 ", classes.paper, {
            [classes.active]: currentPage === 2,
          })}
        >
          <div className="w-[100px] md:w-[200px] aspect-[2/3] transform absolute top-0 right-0">
            <div
              className="bg-[#ffe1aa] w-full h-full"
              style={{
                transform: "translate(77%, -39%) rotate(-45deg)",
              }}
            ></div>
          </div>
          <div className="w-[100px] md:w-[200px] aspect-[2/3] transform -rotate-45 translate-x-0 translate-y-0 overflow-hidden">
            <div
              className="bg-white w-full h-full relative"
              style={{
                transform: "translate(85%, -23.4%) rotate(34deg)",
              }}
            ></div>
          </div>
          <img
            src="/assets/burasagari.webp"
            className={classNames("absolute top-0 right-0", classes.neko)}
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
