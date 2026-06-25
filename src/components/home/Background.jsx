import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full h-[636px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/counry-rev-img-2.jpg')" }}
      />
      
      {/* Main Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Main Title */}
        <motion.h1 
          className="text-white mt-20 font-['Abril_Fatface'] text-6xl md:text-7xl mb-8"
          variants={item}
        >
          Gift of Nature
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-white font-['PT_Sans'] text-lg md:text-xl max-w-md md:max-w-xl text-center mb-16"
          variants={item}
        >
          Lorem ipsum dolor sit atmet congit summ dolore muntio somos con alegrio fabio eres. Dolore mio con.
        </motion.p>
        
        {/* Decorative Elements */}
        <div className="relative w-full h-full">
          {/* Left side elements */}
          <motion.img 
            src="//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-rev-image-1.png" 
            alt="decoration" 
            className="hidden md:block absolute left-0 top-1/4 w-20 h-6"
            variants={slideLeft}
            transition={{ delay: 0.6 }}
          />
          
          {/* Center left elements */}
          <motion.img 
            src="//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-rev-image-2.png" 
            alt="decoration" 
            className="absolute left-1/4 top-1/2 w-28 h-8 -translate-x-1/2"
            variants={item}
            transition={{ delay: 0.7 }}
          />
          
          <motion.img 
            src="//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-rev-image-14.png" 
            alt="decoration" 
            className="absolute left-1/3 top-1/2 w-4 h-4"
            variants={scaleUp}
            transition={{ delay: 0.8 }}
          />
          
          {/* Right side elements */}
          <motion.img 
            src="//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-rev-image-3.png" 
            alt="decoration" 
            className="absolute right-1/4 top-1/2 w-22 h-5 translate-x-1/2"
            variants={slideRight}
            transition={{ delay: 0.7 }}
          />
          
          {/* Bottom elements */}
          <motion.img 
            src="//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-rev-image-4.png" 
            alt="decoration" 
            className="absolute bottom-1/4 left-1/2 w-18 h-5 -translate-x-1/2"
            variants={item}
            transition={{ delay: 0.9 }}
          />
          
          {/* Additional decorative elements */}
          <motion.img 
            src="//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-rev-image-8.png" 
            alt="decoration" 
            className="absolute left-1/4 top-1/3 w-48 h-36 -translate-x-1/2"
            variants={slideLeft}
            transition={{ delay: 0.8 }}
          />
          
          <motion.img 
            src="//mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-rev-image-11.png" 
            alt="decoration" 
            className="absolute right-1/4 top-1/3 w-56 h-32 translate-x-1/2"
            variants={slideRight}
            transition={{ delay: 0.8 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Background;