import { useEffect } from "react";
import { useUser } from "../../../../Context/UserAuthetication";
import { UseCourse } from "../../../../Context/CourseContext";
import { FaBookOpen, FaChartLine, FaAward, FaPlay } from "react-icons/fa";

export default function StudentDashboard() {
  const { user } = useUser();
  const { myCourses, loading, getStudentCourses } = UseCourse();

  useEffect(() => {
    if (user) {
      getStudentCourses();
    }
  }, [user, getStudentCourses]);

  const totalEnrolled = myCourses?.length || 0;
  const completedCourses =
    myCourses?.filter((c) => c.progress === 100).length || 0;

  if (loading) {
    return (
      <div className="p-8 text-center font-bold text-blue-600 animate-pulse">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* WELCOME CARD */}
      <div className="bg-linear-to-r from-blue-700 to-indigo-800 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl font-black mb-2">
            Welcome, {user?.user_metadata?.firstName}!
          </h2>
          <p className="text-blue-100 text-lg">
            You have {totalEnrolled} active courses. Ready to continue?
          </p>
        </div>
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3  lg:gap-8 space-y-2">
        <StatCard
          icon={<FaBookOpen />}
          label="Enrolled Courses"
          value={totalEnrolled}
          color="blue"
        />
        <StatCard
          icon={<FaChartLine />}
          label="In Progress"
          value={totalEnrolled - completedCourses}
          color="orange"
        />
        <StatCard
          icon={<FaAward />}
          label="Completed"
          value={completedCourses}
          color="green"
        />
      </div>

      {/* DYNAMIC COURSES GRID */}
      <div>
        <h3 className="text-2xl font-black text-gray-800 mb-8 px-2">
          My Learning Journey
        </h3>

        {myCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-[2rem] p-3 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Course Image */}
                <div className="relative h-48 w-full rounded-[1.5rem] overflow-hidden mb-5">
                  <img
                    src={course.image || "https://via.placeholder.com/400x300"}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-blue-600 p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <FaPlay />
                    </button>
                  </div>
                </div>

                {/* Course Info */}
                <div className="px-3 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {course.level || "Beginner"}
                  </span>
                  <h4 className="text-xl font-bold text-gray-800 mt-3 mb-4 line-clamp-1">
                    {course.title}
                  </h4>

                  {/* Progress Bar (Dynamic from DB later) */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-blue-600">0%</span>{" "}
                      {/* دابا غي 0 حيت مزال ما حسبناش الـ progress */}
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[0%] rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-gray-200 hover:shadow-blue-200">
                    Continue Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium">
              You haven't enrolled in any courses yet.
            </p>
            <button className="mt-4 text-blue-600 font-bold hover:underline">
              Browse Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Reusable StatCard
function StatCard({ icon, label, value, color }) {
  const styles = {
    blue: "bg-blue-50 text-blue-600 shadow-blue-50",
    orange: "bg-orange-50 text-orange-600 shadow-orange-50",
    green: "bg-emerald-50 text-emerald-600 shadow-emerald-50",
  };
  return (
    <div className="bg-white p-8 rounded-[2.5rem] flex items-center gap-6 border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
      <div className={`text-2xl p-5 rounded-2xl ${styles[color]}`}>{icon}</div>
      <div>
        <p className="text-gray-400 text-sm font-bold uppercase tracking-tight">
          {label}
        </p>
        <h3 className="text-3xl font-black text-gray-800">{value}</h3>
      </div>
    </div>
  );
}
