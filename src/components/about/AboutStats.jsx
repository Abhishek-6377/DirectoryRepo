import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AboutStats = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 32, title: "Mineral Liquids", icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-1.png" },
    { id: 2, value: 0, target: 26, title: "Mineral Liquids", icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-2.png" },
    { id: 3, value: 0, target: 45, title: "Mineral Liquids", icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-2.png" },
    { id: 4, value: 0, target: 11, title: "Mineral Liquids", icon: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/country-icon-4.png" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters =>
        prevCounters.map(counter =>
          counter.value < counter.target
            ? { ...counter, value: counter.value + 1 }
            : counter
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 px-4 bg-cover bg-center font-['Abril_Fatface'] bg-no-repeat text-white" style={{
      backgroundImage:"url('https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/about-us-img-1.jpg?id=2085')"
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter) => (
            <motion.div
              key={counter.id}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-5">
                <img src={counter.icon} alt="Counter icon" className="w-full h-full object-contain" />
              </div>
              <motion.p className="text-6xl font-light mb-2">
                {counter.value}
              </motion.p>
              <h4 className="text-lg">{counter.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;