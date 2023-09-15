// import { useState } from "react";
// import CardLarge from "../general/cards/cardLarge";

// const DealOfTheDay = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [deals, setDeals] = useState<any[]>(Array(4).fill(""));
//   const handleSlideChange = (index: any) => {
//     setActiveSlide(index);
//   };
//   return (
//     <div className="deals px-3 max-sm:py-3 md:mx-4">
//       <h1 className="text-2xl font-bold max-sm:text-[18px]">Deal of the day</h1>
//       <div className="deals gap-4 flex overflow-x-scroll scrolling-touch overflow-x-hidden ">
//         {deals.map((_, i) => (
//           <div className="flex-shrink-0 md:col-span-4" key={i}>
//             <CardLarge />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DealOfTheDay;

import { useState, useRef } from "react";
import CardLarge from "../general/cards/cardLarge";

const DealOfTheDay = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [deals, setDeals] = useState<any[]>(Array(4).fill(""));
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef: any = useRef(null);

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 4; // Adjust the multiplier for sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className=" deals px-3 max-sm:py-3 md:mx-4">
        <h1 className="text-2xl font-bold max-sm:text-[18px]">
          Deal of the day
        </h1>
        <div
          id="deals-container"
          className="deals md:hidden gap-4 flex overflow-x-scroll scrolling-touch overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {deals.map((_, i) => (
            <div className="flex-shrink-0 md:col-span-4 cursor-pointer" key={i}>
              <CardLarge />
            </div>
          ))}
        </div>
        <div
          ref={containerRef}
          className="deals max-md:hidden gap-7 flex overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleMouseMove}
        >
          {deals.map((_, i) => (
            <div className="flex-shrink-0 md:col-span-4 cursor-pointer" key={i}>
              <CardLarge />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DealOfTheDay;
