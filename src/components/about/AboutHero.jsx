import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[400px] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://mildhill.qodeinteractive.com/wp-content/uploads/2019/09/title-img-1.jpg"
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0 z-10"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
        }}
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-20 text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-['Abril_Fatface'] font-light text-white mb-6">About Us</h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, liber error feugiat vel ad. Ex minim mentitum pro. Quo odio veri bonorum te, ius a
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutHero;