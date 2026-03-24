// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUserPlus, FaBookReader, FaGraduationCap } from "react-icons/fa";

export default function About() {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus size={30} />,
      title: "Create Account",
      desc: "Join our community and get access to free resources immediately.",
    },
    {
      id: 2,
      icon: <FaBookReader size={30} />,
      title: "Pick a Course",
      desc: "Select from 5,000+ courses in tech, business, and creative arts.",
    },
    {
      id: 3,
      icon: <FaGraduationCap size={30} />,
      title: "Get Certified",
      desc: "Complete the course and earn a certificate recognized worldwide.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-(--background) overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-(--text) mb-4">
            How It Works
          </h2>
          <p className="text-(--text-light) max-w-2xl mx-auto text-lg">
            Your journey to success is just three steps away. Start today and
            transform your future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-(--card-bg) p-8 rounded-3xl border border-(--text-light)/10 shadow-xl shadow-indigo-500/5 text-center relative"
            >
              <div className="w-16 h-16 bg-(--primary) text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-(--primary)/30">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-(--text) mb-3">
                {step.title}
              </h3>
              <p className="text-(--text-light) leading-relaxed">{step.desc}</p>

              {/* Connector Line (Desktop Only) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-0.5 bg-linear-to-r from-(--primary) to-transparent opacity-20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
