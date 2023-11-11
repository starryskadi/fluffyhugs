import React from "react";
import classes from "./Background.module.scss";
import classNames from "classnames";

const Background = () => {
  return (
    <div className="bg-[#fcf6ec] h-screen w-full overflow-hidden">
      <div className="w-[20%] h-[200vh] relative">
        <div
          className={classNames(
            "absolute left-0 top-0 bottom-0 right-0 flex flex-col justify-between"
          )}
        >
          <img
            src="/assets/bubbles/bubble-1.png"
            className={classNames(
              "w-full aspect-square  object-contain",
              classes.bubbleContainer
            )}
          />
          <img
            src="/assets/bubbles/bubble-2.png"
            className="w-full aspect-square  object-contain"
          />
          <img
            src="/assets/bubbles/bubble-3.png"
            className="w-full aspect-square  object-contain"
          />
          <img
            src="/assets/bubbles/bubble-4.png"
            className="w-full aspect-square  object-contain"
          />
          <img
            src="/assets/bubbles/bubble-5.png"
            className="w-full aspect-square  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Background;
