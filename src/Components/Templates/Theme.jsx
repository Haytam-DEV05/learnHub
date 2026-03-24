// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi2";
import { useEffect, useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="relative overflow-hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-(--card-bg) border border-(--text-light)/10 shadow-lg cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="text-orange-500"
            >
              <HiSun size={26} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0, rotate: -45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3, ease: "backOut" }}
              className="text-indigo-400"
            >
              <HiMoon size={24} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow Effect Background */}
        <motion.div
          animate={{
            scale: theme === "dark" ? [1, 1.2, 1] : 0,
            opacity: theme === "dark" ? 0.2 : 0,
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute inset-0 bg-indigo-500 blur-xl rounded-full"
        />
      </motion.button>
    </div>
  );
}
