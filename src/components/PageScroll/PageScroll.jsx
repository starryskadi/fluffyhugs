import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import useStore from "@src/store/store";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const PageScroll = ({ children }) => {
  const changePage = useStore((state) => state.changePage);

  const parentRef = React.useRef(null);
  let prevAnimation = null;

  const goToSection = (index) => {
    if (prevAnimation) {
      prevAnimation.kill();
    }

    prevAnimation = gsap.to(window, {
      duration: 1,
      scrollTo: { y: index * window.innerHeight },
      ease: "power2.inOut",
    });
  };

  React.useEffect(() => {
    if (parentRef.current) {
      Array.from(parentRef.current.children).forEach((child, index) => {
        ScrollTrigger.create({
          trigger: child,
          markers: false,
          onEnter: () => {
            changePage(index);
            goToSection(index);
          },
        });

        ScrollTrigger.create({
          trigger: child,
          markers: false,
          start: "bottom bottom",
          onEnterBack: () => {
            changePage(index);
            goToSection(index);
          },
        });
      });
    }

    return () => {
      const allScrollTrigger = ScrollTrigger.getAll();
      allScrollTrigger.forEach((scrollTrigger) => {
        scrollTrigger.kill();
      });
    };
  }, [parentRef.current, children]);

  return <div ref={parentRef}>{children}</div>;
};

export default PageScroll;
