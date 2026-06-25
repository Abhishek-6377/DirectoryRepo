import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

const teamMembers = [
  {
    name: "Marianne Loreno",
    position: "Designer",
    image: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/team-img-1.png",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor"
  },
  {
    name: "Giovani Bacardo",
    position: "Head Chef",
    image: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/team-img-2.png",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor"
  },
  {
    name: "Riga Pelore",
    position: "Photographer",
    image: "https://mildhill.qodeinteractive.com/wp-content/uploads/2019/08/team-img-3.png",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium dolor"
  }
];

const AboutTeam = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl w-140 mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-6xl font-light font-['Abril_Fatface'] text-[#244262] mb-6"
        >
          Our Organic Experts
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg"
        >
          Ad mea harum elitr audire, te mea invidunt gubergren constituto. Aliquam postulant eam ne, cu falli decore eam.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;