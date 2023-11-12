import React, { useEffect, useRef, useState } from "react";
import classes from "./Bubble.module.scss";

const Bubble = ({ children }) => {
  const ref = useRef(null);

  const [state, setState] = useState({
    width: 0,
    height: 0,
    windowWidth: 0,
    windowHeight: 0,
    top: 0,
    left: 0,
  });

  const setResizeHandler = (element) => {
    const boundingRect = element.getBoundingClientRect();

    console.log(boundingRect);

    setState({
      windowHeight: window.innerHeight,
      windiwWidth: window.innerWidth,
      left: boundingRect.x,
      top: boundingRect.y,
      width: boundingRect.width,
      height: boundingRect.height,
    });
  };

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      setResizeHandler(element);

      const windowReiszeListenser = () => {
        window.addEventListener("resize", () => {
          setResizeHandler(element);
        });
      };

      return () => {
        window.removeEventListener("resize", windowReiszeListenser);
      };
    }
  }, []);

  const bubbleStartTop = state.height + state.top;
  const bubbleMoveTop = state.windowHeight - state.top;

  return (
    <div
      ref={ref}
      className={classes.bubble}
      style={{
        "--start": `-${bubbleStartTop}px`,
        "--to": `${bubbleMoveTop}px`,
      }}
    >
      {children}
    </div>
  );
};

export default Bubble;
