import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

const WhatsAppFloating = () => {
  const whatsappUrl = 'https://wa.me/923471100056?text=Hi%20ROG%20Store!%20I%20am%20visiting%20your%20website%20and%20need%20some%20help.';

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 20 }}
      className="whatsapp-floating pulse-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon size={28} color="#fff" style={{ fill: '#fff' }} />
    </motion.a>
  );
};

export default WhatsAppFloating;
