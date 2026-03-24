// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center overflow-hidden bg-(--background)"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-(--primary) font-bold tracking-widest uppercase text-sm bg-(--primary)/10 px-4 py-2 rounded-full">
            🚀 Expert-led learning
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-(--text) leading-tight mt-6">
            Master Skills That <span className="text-(--primary)">Matter.</span>
          </h1>
          <p className="text-(--text-light) text-lg mt-6 max-w-lg leading-relaxed">
            Join over 15,000+ students worldwide. Learn coding, design, and
            business from industry leaders anywhere in the world.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="bg-(--primary) text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-500/20 hover:-translate-y-1 transition">
              Get Started
            </button>
            <button className="border-2 border-(--text-light)/20 text-(--text) px-8 py-4 rounded-xl font-bold text-lg hover:bg-(--text-light)/5 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Right Side: Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute top-0 -left-4 w-72 h-72 bg-(--primary) rounded-full blur-[120px] opacity-20"></div>
          <img
            src="/images/heroSectionImage.avif"
            alt="Student"
            className="rounded-3xl shadow-2xl relative z-10 grayscale-20 hover:grayscale-0 transition-all duration-500"
          />
          {/* Floating Card UI */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute -bottom-6 -left-6 bg-(--card-bg) p-5 rounded-2xl shadow-2xl z-20 border border-(--text-light)/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="text-sm font-bold text-(--text)">
                  Verified Certificate
                </p>
                <p className="text-xs text-(--text-light)">
                  Earned by 12k+ users
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
