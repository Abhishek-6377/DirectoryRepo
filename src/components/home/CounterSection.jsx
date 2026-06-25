// CounterSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const counterItems = [
  {
    icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-1.png",
    number: 32,
    label: "Organic",
  },
  {
    icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-2.png",
    number: 26,
    label: "Fast & Easy",
  },
  {
    icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-3.png",
    number: 45,
    label: "Resistant",
  },
  {
    icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-4.png",
    number: 11,
    label: "High Quality",
  },
];
const AnimatedCounter = ({ value }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [displayValue, setDisplayValue] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const duration = 1.5;
      const increment = value / (duration * 60);
      let current = 0;
      const animate = () => {
        current += increment;
        if (current < value) {
          setDisplayValue(Math.floor(current));
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };
      animate();
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <span className="text-3xl font-bold text-white">{displayValue}</span>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/counter-background-2.jpg?id=1477')",
      }}
    >
      <div className="py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counterItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.icon} alt={item.label} className="w-14 h-16 mb-3" />
              <AnimatedCounter value={item.number} />
              <h5 className="mt-1 text-lg text-white font-['Abril_Fatface']">{item.label}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;