// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaBookOpen,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--card-bg) border-t border-(--text-light)/10 pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-(--primary) p-2 rounded-lg text-white">
              <FaBookOpen size={20} />
            </div>
            <h1 className="text-2xl font-bold text-(--text)">LearnHub</h1>
          </div>
          <p className="text-(--text-light)">
            The world's leading platform for online learning. Empowering
            creators and professionals since 2024.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 bg-(--background) rounded-full text-(--text-light) hover:text-(--primary) transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-(--text)">Platform</h4>
          <ul className="space-y-4 text-(--text-light)">
            <li>
              <a href="#" className="hover:text-(--primary)">
                Browse Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--primary)">
                Mentorship
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--primary)">
                Pricing Plans
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-(--text)">Company</h4>
          <ul className="space-y-4 text-(--text-light)">
            <li>
              <a href="#" className="hover:text-(--primary)">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--primary)">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-(--primary)">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-(--text)">Stay Updated</h4>
          <div className="relative">
            <input
              type="text"
              placeholder="Email address"
              className="w-full bg-(--background) border border-(--text-light)/20 rounded-xl px-4 py-3 outline-none focus:border-(--primary) text-(--text)"
            />
            <button className="mt-4 w-full bg-(--primary) text-white font-bold py-3 rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-(--text-light)/10 text-center text-(--text-light) text-sm">
        <p>
          © {new Date().getFullYear()} LearnHub by Haitam Nefal. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
