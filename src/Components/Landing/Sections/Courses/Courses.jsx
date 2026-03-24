import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "./CoursesCard";

export default function Courses() {
  const [category, setCategory] = useState("All");
  const cats = ["All", "Development", "Design", "Marketing"];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp 2024",
      instructor: "Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "Development",
      duration: "42 hours",
      students: 15420,
      rating: 4.9,
      price: 89,
      level: "Beginner",
      lessons: [
        {
          id: 1,
          title: "Introduction to Web Development",
          duration: "15:00",
          completed: true,
        },
        {
          id: 2,
          title: "HTML Fundamentals",
          duration: "45:00",
          completed: true,
        },
        {
          id: 3,
          title: "CSS Styling Basics",
          duration: "50:00",
          completed: false,
        },
        {
          id: 4,
          title: "JavaScript Essentials",
          duration: "1:20:00",
          completed: false,
        },
        {
          id: 5,
          title: "Building Your First Website",
          duration: "2:00:00",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "UI/UX Design Masterclass",
      instructor: "Michael Chen",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      category: "Design",
      duration: "28 hours",
      students: 8930,
      rating: 4.8,
      price: 79,
      level: "Intermediate",
      lessons: [
        {
          id: 1,
          title: "Design Thinking Fundamentals",
          duration: "30:00",
          completed: true,
        },
        {
          id: 2,
          title: "User Research Methods",
          duration: "45:00",
          completed: false,
        },
        {
          id: 3,
          title: "Wireframing & Prototyping",
          duration: "1:00:00",
          completed: false,
        },
        {
          id: 4,
          title: "Visual Design Principles",
          duration: "55:00",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Emily Rodriguez",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Data Science",
      duration: "56 hours",
      students: 12340,
      rating: 4.7,
      price: 99,
      level: "Intermediate",
      lessons: [
        {
          id: 1,
          title: "Python Basics Review",
          duration: "40:00",
          completed: true,
        },
        {
          id: 2,
          title: "NumPy & Pandas",
          duration: "1:30:00",
          completed: true,
        },
        {
          id: 3,
          title: "Data Visualization",
          duration: "1:15:00",
          completed: false,
        },
        {
          id: 4,
          title: "Machine Learning Intro",
          duration: "2:00:00",
          completed: false,
        },
      ],
    },
    {
      id: 4,
      title: "Digital Marketing Strategy",
      instructor: "Alex Thompson",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Marketing",
      duration: "18 hours",
      students: 6780,
      rating: 4.6,
      price: 59,
      level: "Beginner",
      lessons: [
        {
          id: 1,
          title: "Marketing Fundamentals",
          duration: "25:00",
          completed: false,
        },
        {
          id: 2,
          title: "Social Media Marketing",
          duration: "45:00",
          completed: false,
        },
        { id: 3, title: "SEO Basics", duration: "50:00", completed: false },
      ],
    },
    {
      id: 5,
      title: "Advanced React Patterns",
      instructor: "David Park",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      category: "Development",
      duration: "24 hours",
      students: 4520,
      rating: 4.9,
      price: 129,
      level: "Advanced",
      lessons: [
        {
          id: 1,
          title: "Compound Components",
          duration: "45:00",
          completed: false,
        },
        {
          id: 2,
          title: "Render Props Pattern",
          duration: "40:00",
          completed: false,
        },
        {
          id: 3,
          title: "Custom Hooks Deep Dive",
          duration: "1:00:00",
          completed: false,
        },
        {
          id: 4,
          title: "Performance Optimization",
          duration: "1:20:00",
          completed: false,
        },
      ],
    },
    {
      id: 6,
      title: "Mobile App Development with React Native",
      instructor: "Lisa Wang",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      category: "Development",
      duration: "38 hours",
      students: 7890,
      rating: 4.8,
      price: 109,
      level: "Intermediate",
      lessons: [
        {
          id: 1,
          title: "React Native Setup",
          duration: "30:00",
          completed: false,
        },
        {
          id: 2,
          title: "Core Components",
          duration: "1:00:00",
          completed: false,
        },
        {
          id: 3,
          title: "Navigation & Routing",
          duration: "55:00",
          completed: false,
        },
        {
          id: 4,
          title: "State Management",
          duration: "1:10:00",
          completed: false,
        },
      ],
    },
  ];

  const filtered =
    category === "All"
      ? courses
      : courses.filter((c) => c.category === category);

  return (
    <section id="courses" className="py-24 bg-(--background)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-black text-(--text)">
              Our Top Courses
            </h2>
            <p className="text-(--text-light) mt-2">
              Learn from the best in the industry.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {cats.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  category === cat
                    ? "bg-(--primary) text-white shadow-lg shadow-(--primary)/30"
                    : "bg-(--card-bg) text-(--text-light) border border-(--text-light)/20 hover:border-(--primary)"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
