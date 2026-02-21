import { useState } from "react";
import CoursesCard from "./CoursesCard";

export default function Courses() {
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

  const [activeCategories, setActiveCategories] = useState("All");
  const categories = [
    "All",
    "Development",
    "Design",
    "Data Science",
    "Marketing",
  ];
  return (
    <div className="min-h-screen max-w-275 mx-auto">
      <h2 className="text-[40px] font-bold max-w-fit mx-auto">
        Explore Our Top Courses
      </h2>
      <p className="border border-black rounded-[30px] px-8 max-w-fit mx-auto">
        Popular Courses
      </p>
      <p className="max-w-[70%] mx-auto text-center">
        Choose from hundreds of courses taught by industry experts. Learn at
        your own pace and transform your career.
      </p>

      {/* Categories */}
      <div className="categories my-8 max-w-fit mx-auto">
        {categories.map((categorie) => {
          return (
            <button
              onClick={() => setActiveCategories(categorie)}
              className={`rounded-lg py-1 px-4 text-(--text) border border-black mx-1 cursor-pointer ${activeCategories === categorie && "border-0 bg-(--accent) text-white"}`}
            >
              {categorie}
            </button>
          );
        })}
      </div>

      {/* Courses */}
      <div className="courses grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
        {courses.map((course) => {
          return <CoursesCard course={course} key={course.id} />;
        })}
      </div>
    </div>
  );
}
