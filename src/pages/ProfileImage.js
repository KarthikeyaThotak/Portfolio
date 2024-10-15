import { motion } from 'framer-motion';
import profilePic from "../../public/images/profile/developer-pic-1.png";

const ProfileImage = () => {
  return (
    <motion.div
      style={{
        backgroundImage: `url("https://i.imgur.com/NHNFKlM.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: 'inset 0 0 0 9px rgb(255 255 255/30%)',
        order: 1,
        justifySelf: 'center',
        width: 300,
        height: 300,
      }}
      initial={{ borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }}
      animate={{
        borderRadius: ['60% 40% 30% 70%/60% 30% 70% 40%', '30% 60% 70% 40%/50% 60% 30% 60%', '60% 40% 30% 70%/60% 30% 70% 40%'],
      }}
      transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
    />
    
  );
};

export default ProfileImage;
