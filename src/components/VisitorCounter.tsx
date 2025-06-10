import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const VisitorCounter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-6 z-50 bg-white dark:bg-dark-800 rounded-full shadow-lg px-4 py-2 flex items-center gap-2"
    >
      <Users size={18} className="text-blue-500" />
      <span className="font-medium text-gray-700 dark:text-gray-200">
        Thank you for visiting!
      </span>
    </motion.div>
  );
};

export default VisitorCounter;