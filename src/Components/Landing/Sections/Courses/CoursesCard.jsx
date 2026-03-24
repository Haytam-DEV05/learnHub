// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaStar, FaClock, FaUsers } from "react-icons/fa";

export default function CourseCard({ course }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-(--card-bg) rounded-4xl overflow-hidden border border-(--text-light)/10 shadow-lg hover:shadow-2xl transition-all"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          className="w-full h-full object-cover"
          alt={course.title}
        />
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-black shadow-sm">
          {course.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-(--primary) uppercase tracking-wider">
            {course.level}
          </span>
          <div className="flex items-center gap-1 text-yellow-500 text-sm font-bold">
            <FaStar /> {course.rating}
          </div>
        </div>

        <h3 className="text-xl font-bold text-(--text) mb-2 line-clamp-1">
          {course.title}
        </h3>
        <p className="text-(--text-light) text-sm mb-4">
          By{" "}
          <span className="text-(--text) font-medium">{course.instructor}</span>
        </p>

        <div className="flex items-center justify-between text-(--text-light) text-sm pt-4 border-t border-(--text-light)/10">
          <div className="flex items-center gap-2">
            <FaClock /> {course.duration}
          </div>
          <div className="flex items-center gap-2">
            <FaUsers /> {course.students.toLocaleString()}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-black text-(--text)">
            ${course.price}
          </span>
          <button className="bg-(--primary) text-white px-5 py-2.5 rounded-xl font-bold hover:bg-(--primary-dark) transition-colors shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
