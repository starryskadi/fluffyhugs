import React, { useEffect, useState } from "react";
import classNames from "classnames";

const Loading = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // TODO: Implement the assets loading here
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={classNames(
        "fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-white flex items-center justify-center transition-opacity w-screen h-screen overflow-hidden",
        {
          "opacity-0 invisible": loaded,
          "opacity-1": !loaded,
        }
      )}
    >
      <img src="/assets/loading.webp" className="max-w-full" alt="Loading" />
    </div>
  );
};

export default Loading;
