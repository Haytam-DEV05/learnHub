// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa";
import Theme from "./Theme";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Courses", "About", "Pricing"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-100 bg-(--background)/80 backdrop-blur-xl border-b border-(--text-light)/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="bg-(--primary) p-2 rounded-xl text-white shadow-lg shadow-(--primary)/20">
            <FaBookOpen size={20} />
          </div>
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-(--text)">
            LearnHub
          </h1>
        </NavLink>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-(--text) font-semibold">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-(--primary) transition-colors relative group opacity-80 hover:opacity-100"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-(--primary) transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE (Buttons + Theme) */}
        <div className="flex items-center gap-3 md:gap-5">
          <Theme />

          <div className="hidden sm:flex items-center gap-4">
            <NavLink
              to="/SignIn"
              className="text-(--text) font-bold hover:text-(--primary) transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/SignUp"
              className="bg-(--primary) text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-(--primary)/25 hover:scale-105 active:scale-95 transition-all"
            >
              Join Free
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-(--text) bg-(--card-bg) rounded-lg border border-(--text-light)/10 shadow-sm"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-(--background) border-b border-(--text-light)/10 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-5">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-(--text) hover:text-(--primary) block transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <hr className="border-(--text-light)/10 my-2" />
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/SignIn"
                  className="w-full text-center py-3 font-bold text-(--text)"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/SignUp"
                  className="w-full bg-(--primary) text-white py-4 rounded-2xl font-black shadow-xl"
                >
                  Get Started Free
                </NavLink>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
