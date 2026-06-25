import React from "react";
import { motion } from "framer-motion";

const SlideTextLayer = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`absolute pointer-events-auto visible perspective-[601px] ${className}`}
  >
    <div className="rs-layer">{children}</div>
  </motion.div>
);

const HomeSlider = () => {
  return (
    <div className="home-slider-wrapper w-full h-screen bg-[#ebe1cf] relative overflow-hidden">
      <div id="rev_slider_10_1_wrapper" className="rs-module-wrap w-full h-full relative">

        <div className="rs-slides absolute inset-0">
          <div
            className="rs-slide absolute inset-0 z-20 opacity-100 bg-[#ebe1cf]"
            data-key="rs-13"
          >
            {/* Background Canvas */}
            <div className="rs-sbg-px w-full h-full">
              <div className="rs-sbg-wrap w-full h-full" data-key="rs-13">
                <canvas className="w-full h-full bg-transparent opacity-100" />
              </div>
            </div>

            {/* Background Text */}
            <SlideTextLayer className="left-[3vw] top-[25vh] z-10 text-[18vw] font-bold leading-none font-abril text-[rgba(217,96,32,0.1)]">
              <motion.span
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 2, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="font-['Abril_Fatface'] inline-block"
              >
                Homegrown
              </motion.span>
            </SlideTextLayer>

            {/* Main Image */}
            <div className="absolute left-[20vw] top-[20vh] z-20">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="w-[235px] h-[360px]"
              >
                <img
                  src="https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-home-img-2.png"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Price Text */}
            <SlideTextLayer className="left-[22vw] top-[66vh] z-30 font-semibold text-[#244262] text-[24px] leading-[40px]">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 2, opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="font-['Abril_Fatface'] inline-block"
              >
                100% Peach Jam $57
              </motion.span>
            </SlideTextLayer>

            {/* Title Text */}
            <SlideTextLayer className="left-[40vw] font-bold top-[22vh] z-30 font-abril text-[#244262] text-[60px] leading-[48px]">
              <motion.span
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 2, opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="font-['Abril_Fatface'] inline-block"
              >
                Organic Honey
              </motion.span>
            </SlideTextLayer>

            {/* Short Description */}
            <motion.p
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="absolute top-[314px] left-[618px] transform -translate-y-[67px] w-[450px] text-[18px] leading-[25px] text-[#848484] font-pt-sans"
            >
              Lorem ipsum dolor sit amet, ea aeterno quaeque constituto qui, ex qui regione sensibus scripserit.
            </motion.p>

            {/* Long Description */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
              className="absolute top-[314px] left-[618px] w-[40vw] text-[16px] leading-[25px] text-[#848484] font-pt-sans"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium.
            </motion.p>

            {/* CTA Button */}
            <div className="absolute top-[424px]  left-[618px] z-30">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <a
                  href="https://mildhill.qodeinteractive.com/portfolio/standard/"
                  target="_self"
                  className="bg-blue-300 h-300 text-white px-13 py-5 text-sm font-bold font-roboto transition duration-300 hover:bg-blue-600"
                >
                  <span className="tracking-wide">PORTFOLIO</span>
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
