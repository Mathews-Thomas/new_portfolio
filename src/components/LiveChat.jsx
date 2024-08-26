import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LiveChat = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadTawkTo = () => {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66cb22bc50c10f7a00a037a7/1i64nvcle';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
      
      s1.onload = () => {
        setIsLoaded(true);
      };

      return () => {
        document.body.removeChild(s1);
      };
    };

    // Delay loading the script to improve initial page load
    const timer = setTimeout(() => loadTawkTo(), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-5 right-5 z-50"
    >
      {isLoaded && (
        <div id="tawkToWidgetContainer" className='bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-3'>
        </div>
      )}
    </motion.div>
  );
};

export default LiveChat;
