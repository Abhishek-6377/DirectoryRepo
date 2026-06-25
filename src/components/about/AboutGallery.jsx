import { motion } from 'framer-motion';

const galleryImages = [
  { src: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/main-gallery-image-1.jpg", alt: "Fresh produce" },
  { src: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/main-gallery-image-2.jpg", alt: "Herbs in jars" },
  { src: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/main-gallery-image-3.jpg", alt: "Vegetables on table" },
  { src: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/main-gallery-image-4.jpg", alt: "More fresh produce" },
];

const AboutGallery = () => {
  return (
    <section className="py-12 px-4">
      <div className="overflow-x-auto mx-auto">
        <motion.div
          className="flex-row flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] overflow-hidden rounded-lg"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                whileHover={{ scale: 1.05 }}
                className="w-full h-110 object-cover cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGallery;