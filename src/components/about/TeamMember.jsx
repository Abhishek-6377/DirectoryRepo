import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';

const TeamMember = ({ member, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center"
    >
      <div className="relative group overflow-hidden mb-6">
        <motion.img
          src={member.image}
          alt={member.name}
          whileHover={{ scale: 1.05 }}
          className="w-full h-auto rounded-full"
        />
      </div>
      <h3 className="text-xl font-['Abril_Fatface'] font-medium mb-1">{member.name}</h3>
      <i><p className="text-gray-600 mb-4">{member.position}</p></i>
      <p className="mb-4">{member.bio}</p>
      <SocialIcons />
    </motion.div>
  );
};

export default TeamMember;