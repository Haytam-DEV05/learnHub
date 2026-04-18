import { FaUsers, FaVideo, FaDollarSign, FaStar } from "react-icons/fa";
import { UseCourse } from "../../../../Context/CourseContext";
import { useUser } from "../../../../Context/UserAuthetication";
import { NavLink } from "react-router";

export default function TeacherDashboard() {
  const { user } = useUser();
  const { allCourses } = UseCourse();

  // Filter courses created by this teacher
  const myCreatedCourses = allCourses.filter((c) => c.teacher_id === user?.id);

  return (
    <div className="space-y-10">
      {/* Header with Action */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-800">
            Instructor Dashboard
          </h2>
          <p className="text-slate-500">
            Manage your courses and track student performance.
          </p>
        </div>
        <NavLink
          to="/teacher/create"
          className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
        >
          + Create New Course
        </NavLink>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <TeacherStatCard
          icon={<FaVideo />}
          label="Total Courses"
          value={myCreatedCourses.length}
          color="blue"
        />
        <TeacherStatCard
          icon={<FaUsers />}
          label="Total Students"
          value="0"
          color="purple"
        />
        <TeacherStatCard
          icon={<FaStar />}
          label="Avg. Rating"
          value="0"
          color="orange"
        />
        <TeacherStatCard
          icon={<FaDollarSign />}
          label="Earnings"
          value="$0"
          color="green"
        />
      </div>

      {/* Course Management Table */}
      <div className="bg-white rounded-4xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 border-b border-slate-50">
          <h3 className="text-xl font-bold text-slate-800">My Courses</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 uppercase text-xs font-bold">
              <tr>
                <th className="px-8 py-4">Course Name</th>
                <th className="px-8 py-4">Enrolled</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {myCreatedCourses.map((course) => (
                <tr
                  key={course.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-200 rounded-lg overflow-hidden">
                        <img
                          src={course.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-bold text-slate-700">
                        {course.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-slate-600 font-medium">
                    {course.students_count || 0} Students
                  </td>
                  <td className="px-8 py-5 text-slate-900 font-bold">
                    ${course.price}
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">
                      Published
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="text-blue-600 font-bold hover:underline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {myCreatedCourses.length === 0 && (
            <div className="p-20 text-center text-slate-400">
              You haven't created any courses yet. Start sharing your knowledge!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TeacherStatCard({ icon, label, value, color }) {
  const colors = {
    blue: "text-blue-600 bg-blue-50",
    purple: "text-purple-600 bg-purple-50",
    orange: "text-orange-600 bg-orange-50",
    green: "text-green-600 bg-green-50",
  };
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${colors[color]}`}
      >
        {icon}
      </div>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
      <h4 className="text-2xl font-black text-slate-800">{value}</h4>
    </div>
  );
}
