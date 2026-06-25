import { motion } from 'framer-motion';

const AboutOrganic = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 text-center items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
<p className="text-blue-900 text-xs tracking-[9px] uppercase font-abril font-light">ORGANIC</p>
          <div className="h-5"></div>
          <p className="text-blue-900 text-2xl tracking-[7px] font-light uppercase">*</p>
          <h2 className="text-4xl font-light font-['Abril_Fatface'] text-[#244262] mb-6">Best Organic</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          </p>
          <p className="mb-8">
            Eius causae omittantur nec id, consulatu reformidans at nam, deleniti inciderint intellegebat ex ius. Ne delectus voluptaria vituperata qui. In elitr congue est, in nam quis brute menandri.          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-300 text-white font-serif px-15 py-4 rounded-none"
          >
            PORFOLIO
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img src="https://mildhill.qodeinteractive.com/wp-content/uploads/2019/09/main-image-11.png" alt="Organic vegetables" className="max-w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOrganic;