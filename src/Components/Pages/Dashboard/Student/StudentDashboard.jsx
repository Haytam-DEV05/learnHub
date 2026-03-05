import { useEffect, useState } from "react";
import { FaBookOpen, FaChartLine, FaAward } from "react-icons/fa";
import supabase from "../../../../util/supabase";

export default function StudentDashboard() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };

    // Dummy courses (t9dar tbdelhom b real DB)
    const loadCourses = () => {
      setCourses([
        {
          id: 1,
          title: "React for Beginners",
          progress: 70,
          teacher: "John Doe",
        },
        {
          id: 2,
          title: "Advanced JavaScript",
          progress: 45,
          teacher: "Jane Smith",
        },
        {
          id: 3,
          title: "UI/UX Design Basics",
          progress: 90,
          teacher: "Mark Lee",
        },
      ]);
    };

    getUser();
    loadCourses();
  }, []);

  const totalCourses = courses.length;
  const completedCourses = courses.filter((c) => c.progress === 100).length;
  const inProgressCourses = courses.filter(
    (c) => c.progress > 0 && c.progress < 100,
  ).length;

  return (
    <div>
      {/* WELCOME */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">
          Welcome back, {user?.user_metadata?.firstName} 👋
        </h2>
        <p className="text-gray-500">
          Keep pushing forward, you're doing great 🚀
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <FaBookOpen className="text-blue-600 text-2xl" />
            <span className="text-gray-400 text-sm">Enrolled</span>
          </div>
          <h3 className="text-3xl font-bold mt-4">{totalCourses}</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <FaChartLine className="text-green-600 text-2xl" />
            <span className="text-gray-400 text-sm">In Progress</span>
          </div>
          <h3 className="text-3xl font-bold mt-4">{inProgressCourses}</h3>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex justify-between items-center">
            <FaAward className="text-purple-600 text-2xl" />
            <span className="text-gray-400 text-sm">Completed</span>
          </div>
          <h3 className="text-3xl font-bold mt-4">{completedCourses}</h3>
        </div>
      </div>

      {/* MY COURSES */}
      <div>
        <h3 className="text-2xl font-bold mb-6">My Courses</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold mb-2">{course.title}</h4>

              <p className="text-sm text-gray-500 mb-4">
                Instructor: {course.teacher}
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {course.progress}% completed
              </p>

              <button className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
