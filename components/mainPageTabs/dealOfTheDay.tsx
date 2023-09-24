import { useState, useRef, useEffect } from "react";
import CardLarge from "../general/cards/cardLarge";
import { motion } from "framer-motion";
const DealOfTheDay = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [deals, setDeals] = useState<any[]>(Array(6).fill(""));
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
    const walk = (x - startX) * 4;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };
  const [width, setWidth] = useState(0);
  const slide: any = useRef();

  // useEffect(() => {
  //   setWidth(slide.current.scrollWidth - slide.current.offsetWidth);
  //   // console.log(slide.current);
  // }, []);
  const handleNext = () => {};
  return (
    <>
      <motion.div className=" deals px-3 max-sm:py-3 md:mx-4 overflow-hidden">
        <h1 className="text-2xl font-semibold max-sm:text-[18px]">
          Deal of the day
        </h1>
        {/* mobile */}
        <div
          id="deals-container"
          className="deals gap-4 flex overflow-x-scroll scrolling-touch overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {deals.map((_, i) => (
            <div className="flex-shrink-0 md:col-span-4 cursor-pointer" key={i}>
              <CardLarge />
            </div>
          ))}
        </div>
        {/* <motion.div
          ref={slide}
          className="deals max-md:hidden gap-7 flex scrolling-touch"
          style={{ scrollBehavior: "smooth" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {deals.map((_, i) => (
            <div className="flex-shrink-0 md:col-span-4 cursor-pointer" key={i}>
              <CardLarge />
            </div>
          ))}
        </motion.div> */}
      </motion.div>
    </>
  );
};

export default DealOfTheDay;
