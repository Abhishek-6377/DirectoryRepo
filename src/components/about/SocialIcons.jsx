import { motion } from 'framer-motion';
import { FaFacebookF, FaPinterestP, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  const icons = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/QodeInteractive/" },
    { icon: <FaPinterestP />, link: "https://www.pinterest.com/qodeinteractive/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/abhishek____42/" },
    { icon: <FaTwitter />, link: "https://x.com/AbhiShek812359?t=0PVdT7YZpW8m1nttELHfiA&s=08 " },
  ];

  return (
    <div className="flex justify-center gap-2">
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm">{item.icon}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;