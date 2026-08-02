import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/i18n';

export function GreetingBanner() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const getGreetings = () => {
    const hour = new Date().getHours();
    const greetings = [
      "Hello 👋",
      "Namaste 🙏",
      "Welcome",
      "Stay Healthy 💚",
      "Pure Moringa 🌿"
    ];

    if (hour >= 5 && hour < 12) {
      greetings.push("Good Morning ☀️");
    } else if (hour >= 18 && hour < 21) {
      greetings.push("Good Evening 🌙");
    }

    if (i18n.language === 'hi') {
      return [
        "नमस्ते 👋",
        "नमस्कार 🙏",
        "आपका स्वागत है",
        "स्वस्थ रहें 💚",
        "शुद्ध मोरिंगा 🌿"
      ];
    }

    return greetings;
  };

  const greetings = getGreetings();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <div className="flex justify-center items-center h-10 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium tracking-wide text-sm md:text-base absolute"
        >
          {greetings[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
