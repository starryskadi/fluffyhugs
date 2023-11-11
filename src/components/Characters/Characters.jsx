import React from "react";
import CharacterAnimationIdle from "../CharacterAnimationIdle/CharacterAnimationIdle";
import classes from "./Characters.module.scss";
import classNames from "classnames";

const Characters = () => {
  const characters = [
    {
      id: 1,
      src: "/assets/img1.webp",
    },
    {
      id: 2,
      src: "/assets/img2.webp",
    },
    {
      id: 3,
      src: "/assets/img3.webp",
    },
    {
      id: 4,
      src: "/assets/img4.webp",
    },
    {
      id: 5,
      src: "/assets/img5.webp",
    },
    {
      id: 6,
      src: "/assets/img6.webp",
    },
    {
      id: 7,
      src: "/assets/img7.webp",
    },
    {
      id: 8,
      src: "/assets/img8.webp",
    },
    {
      id: 9,
      src: "/assets/img9.webp",
    },
    {
      id: 10,
      src: "/assets/img10.webp",
    },
    {
      id: 11,
      src: "/assets/img11.webp",
    },
    {
      id: 12,
      src: "/assets/img12.webp",
    },
    {
      id: 13,
      src: "/assets/img13.webp",
    },
    {
      id: 14,
      src: "/assets/img14.webp",
    },
    {
      id: 15,
      src: "/assets/img15.webp",
    },
    {
      id: 16,
      src: "/assets/img16.webp",
    },

    {
      id: 17,
      src: "/assets/img1.webp",
    },
    {
      id: 18,
      src: "/assets/img2.webp",
    },
    {
      id: 19,
      src: "/assets/img3.webp",
    },
    {
      id: 20,
      src: "/assets/img4.webp",
    },
    {
      id: 21,
      src: "/assets/img5.webp",
    },
    {
      id: 22,
      src: "/assets/img6.webp",
    },
    {
      id: 23,
      src: "/assets/img7.webp",
    },
    {
      id: 24,
      src: "/assets/img8.webp",
    },
    {
      id: 25,
      src: "/assets/img9.webp",
    },
    {
      id: 26,
      src: "/assets/img10.webp",
    },
    {
      id: 27,
      src: "/assets/img11.webp",
    },
    {
      id: 28,
      src: "/assets/img12.webp",
    },
    {
      id: 29,
      src: "/assets/img13.webp",
    },
    {
      id: 30,
      src: "/assets/img14.webp",
    },
    {
      id: 31,
      src: "/assets/img15.webp",
    },
    {
      id: 32,
      src: "/assets/img16.webp",
    },
    {
      id: 33,
      src: "/assets/img1.webp",
    },
    {
      id: 34,
      src: "/assets/img2.webp",
    },
    {
      id: 35,
      src: "/assets/img3.webp",
    },
    {
      id: 36,
      src: "/assets/img4.webp",
    },
    {
      id: 37,
      src: "/assets/img5.webp",
    },
    {
      id: 38,
      src: "/assets/img6.webp",
    },
    {
      id: 39,
      src: "/assets/img7.webp",
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen w-full fixed">
      <div className="w-[1024px] aspect-[1/2]">
        <div className="relative">
          {characters.map((character, index) => {
            const currentLine = Math.floor(index / 5);

            const currentIndex = Math.floor(index % 5);
            const isEven = currentLine % 2 !== 0;

            var startDrawingPlaceLeft = -97.65;
            var spaceHorizontalBetween = 78.125;

            if (isEven) {
              startDrawingPlaceLeft += 20;
            }

            var startDrawingPlaceTop = -15;
            var spaceVerticalBetween = 19.5;
            // if (character?.customComponent) character.customComponent;
            // $topSpace: 400px;
            // $startDrawingPlaceTop: -600px;

            return (
              <div
                className={classNames(
                  "absolute transform w-full",
                  classes.character
                )}
                style={{
                  "--tw-translate-x": `${
                    startDrawingPlaceLeft +
                    spaceHorizontalBetween * currentIndex
                  }%`,
                  "--tw-translate-y": `${
                    startDrawingPlaceTop + spaceVerticalBetween * currentLine
                  }%`,
                }}
              >
                <CharacterAnimationIdle delay={0.05 * currentLine}>
                  {character.customComp ? (
                    character.customComp
                  ) : (
                    <img src={character.src} className="w-full" />
                  )}
                </CharacterAnimationIdle>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="overflow-hidden relative flex items-center justify-center  h-screen">
  //       <div className="relative overflow-hidden w-[1024px] h-[1024px]">
  //         {characters.map((character, index) => {
  //           const currentLine = Math.floor(index / 5);

  //           const currentIndex = Math.floor(index % 5);
  //           // if (character?.customComponent) character.customComponent;
  //           return (
  //             <div
  //               className={classNames("absolute", classes.character)}
  //               style={{
  //                 "--currentIndex": currentIndex,
  //                 "--currentLine": currentLine,
  //               }}
  //             >
  //               <CharacterAnimationIdle>
  //                 <img src={character.src} className="w-full" />
  //               </CharacterAnimationIdle>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );

  //   return (
  //     <div className="relative w-full overflow-hidden h-screen">
  //       {/* <div className="absolute top-0 left-0 right-0 bottom-0"> */}
  //       {/* <div className="absolute  aspect-square overflow-visible w-[500px]"> */}
  //       {/* <div className="absolute w-full h-full transform -translate-x-1/2 -translate-y-1/2"> */}
  //       {characters.map((character, index) => {
  //         const currentLine = Math.floor(index / 5);

  //         const currentIndex = Math.floor(index % 5);
  //         // if (character?.customComponent) character.customComponent;
  //         return (
  //           <div
  //             className={classNames("absolute w-[1600px]", classes.character)}
  //             style={{
  //               "--currentIndex": currentIndex,
  //               "--currentLine": currentLine,
  //             }}
  //           >
  //             <CharacterAnimationIdle>
  //               <img src={character.src} className="w-full" />
  //             </CharacterAnimationIdle>
  //           </div>
  //         );
  //       })}
  //       {/* </div> */}
  //       {/* </div> */}
  //       {/* </div> */}
  //     </div>
  //   );
};

export default Characters;
